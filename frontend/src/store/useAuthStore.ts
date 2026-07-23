import { create } from 'zustand'

export interface UserProfile {
  _id: string
  name: string
  email: string
  role: 'student' | 'tutor' | 'both' | 'admin'
  avatar: string
  bio: string
  subjects: string[]
  hourlyRate?: number
  isVerified?: boolean
  createdAt?: string
}

export type ProfilePerspective = 'student' | 'tutor' | 'both'

interface AuthState {
  user: UserProfile | null
  token: string | null
  activePerspective: ProfilePerspective
  setAuth: (user: UserProfile, token: string) => void
  updateUser: (updatedUser: Partial<UserProfile>) => void
  setPerspective: (perspective: ProfilePerspective) => void
  logout: () => void
}

const getInitialToken = () => localStorage.getItem('socrates_token') || null
const getInitialUser = (): UserProfile | null => {
  const stored = localStorage.getItem('socrates_user')
  try {
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  user: getInitialUser() || {
    _id: 'demo_user_101',
    name: 'Alex Rivera',
    email: 'alex.rivera@socrates.edu',
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Computer Science Major @ Stanford • Passionate about AI, Data Structures & Peer Mentorship.',
    subjects: ['Algorithms', 'Python', 'React', 'Linear Algebra'],
    hourlyRate: 45,
    isVerified: true,
    createdAt: '2026-01-15T00:00:00.000Z',
  },
  token: getInitialToken(),
  activePerspective: 'both',

  setAuth: (user, token) => {
    localStorage.setItem('socrates_token', token)
    localStorage.setItem('socrates_user', JSON.stringify(user))
    set({ user, token })
  },

  updateUser: (updatedUser) => {
    set((state) => {
      if (!state.user) return state
      const newUser = { ...state.user, ...updatedUser }
      localStorage.setItem('socrates_user', JSON.stringify(newUser))
      return { user: newUser }
    })
  },

  setPerspective: (perspective) => {
    set({ activePerspective: perspective })
  },

  logout: () => {
    localStorage.removeItem('socrates_token')
    localStorage.removeItem('socrates_user')
    set({ user: null, token: null })
  },
}))
