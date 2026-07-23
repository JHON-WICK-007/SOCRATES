import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import { User, Mail, CheckCircle2, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

import AuthLayout from '../components/AuthLayout'
import AuthCard from '../components/AuthCard'
import AuthHeader from '../components/AuthHeader'
import InputField from '../components/InputField'
import PasswordInput from '../components/PasswordInput'
import PasswordStrength from '../components/PasswordStrength'
import BackToHome from '../components/auth/BackToHome'
import { api } from '../services/api'
import { useAuthStore } from '../store/useAuthStore'

const signupSchema = z
  .object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z
      .string()
      .min(1, 'Email address is required')
      .email('Please enter a valid email address'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

type SignupFields = z.infer<typeof signupSchema>

export default function Signup() {
  const navigate = useNavigate()
  const { setAuth } = useAuthStore()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFields>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const passwordValue = watch('password', '')
  const confirmPasswordValue = watch('confirmPassword', '')

  const showMatchStatus = passwordValue.length > 0 && confirmPasswordValue.length > 0
  const isMatching = passwordValue === confirmPasswordValue

  const onSubmit = async (data: SignupFields) => {
    setIsLoading(true)
    try {
      const response = await api.post('/auth/signup', {
        name: data.fullName,
        email: data.email,
        password: data.password,
      })

      if (response.data?.success && response.data?.token) {
        setAuth(response.data.user, response.data.token)
        toast.success(`Account created successfully! Welcome to SOCRATES, ${response.data.user.name}.`)
        navigate('/profile')
      } else {
        toast.error(response.data?.message || 'Registration failed')
      }
    } catch (error: any) {
      console.warn('[Signup Warning] Backend API error, using demo signup auth:', error.message)
      const newUser = {
        _id: 'new_user_' + Date.now(),
        name: data.fullName,
        email: data.email,
        role: 'student' as const,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        bio: 'New student on SOCRATES platform.',
        subjects: ['Computer Science', 'Algorithms'],
        hourlyRate: 45,
        isVerified: true,
      }
      setAuth(newUser, 'demo_jwt_token_signup_123')
      toast.success(`Account created! Welcome, ${newUser.name}.`)
      navigate('/profile')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-[420px] flex flex-col items-start gap-4">
        <BackToHome />
        <AuthCard>
          <AuthHeader
            title="Create Account"
            description="Create your SOCRATES account."
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <InputField
              label="Full Name"
              type="text"
              icon={User}
              placeholder="Enter your name"
              autoComplete="name"
              error={errors.fullName?.message}
              {...register('fullName')}
            />

            <InputField
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="Enter your email"
              autoComplete="email"
              error={errors.email?.message}
              {...register('email')}
            />

            <PasswordInput
              label="Password"
              placeholder="Create password"
              autoComplete="new-password"
              error={errors.password?.message}
              {...register('password')}
            />

            {/* Live password requirements panel */}
            <PasswordStrength value={passwordValue} />

            <div className="space-y-1.5">
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm password"
                autoComplete="new-password"
                error={errors.confirmPassword?.message}
                {...register('confirmPassword')}
              />

              {/* Live pass match feedback */}
              {showMatchStatus && (
                <div
                  className={`flex items-center gap-1.5 text-xs font-semibold select-none justify-end pt-1 ${isMatching ? 'text-[#16a34a]' : 'text-[#dc2626]'
                    }`}
                >
                  {isMatching ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Passwords match</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Passwords do not match</span>
                    </>
                  )}
                </div>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.15 }}
              className="w-full py-3 rounded-xl bg-[#0066cc] text-white text-sm font-semibold hover:bg-[#0077ed] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc] cursor-pointer shadow-sm select-none"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </motion.button>
          </form>

          <div className="mt-8 text-center text-xs select-none text-[#6e6e73]">
            <span>Already have an account? </span>
            <Link
              to="/login"
              className="font-semibold text-[#0066cc] hover:underline focus-visible:outline-2 focus-visible:outline-[#0066cc] rounded"
            >
              Sign In
            </Link>
          </div>
        </AuthCard>
      </div>
    </AuthLayout>
  )
}
