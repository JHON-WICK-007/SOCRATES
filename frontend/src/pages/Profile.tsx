import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  BookOpen,
  Award,
  DollarSign,
  Star,
  Clock,
  UserCheck,
  Edit3,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Plus,
  X,
  ArrowUpRight,
  MessageSquare,
  Calendar,
  Layers,
  Check,
  TrendingUp,
  Bookmark,
  ChevronRight
} from 'lucide-react'
import { useAuthStore, ProfilePerspective } from '../store/useAuthStore'
import { updateUserProfileApi } from '../services/api'
import { toast } from 'sonner'

export default function Profile() {
  const { user, updateUser, activePerspective, setPerspective } = useAuthStore()

  // Edit Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    hourlyRate: user?.hourlyRate || 45,
    avatar: user?.avatar || '',
    subjectsText: user?.subjects ? user.subjects.join(', ') : '',
  })
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        bio: user.bio,
        hourlyRate: user.hourlyRate || 45,
        avatar: user.avatar,
        subjectsText: user.subjects.join(', '),
      })
    }
  }, [user])

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    const subjectsArr = formData.subjectsText
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0)

    const updatePayload = {
      name: formData.name,
      bio: formData.bio,
      hourlyRate: Number(formData.hourlyRate),
      avatar: formData.avatar,
      subjects: subjectsArr,
    }

    // Call API and update store
    const result = await updateUserProfileApi(updatePayload)
    updateUser(updatePayload)
    setIsSaving(false)

    if (result.success !== false) {
      toast.success('Profile updated successfully!')
      setIsEditModalOpen(false)
    } else {
      toast.info('Profile saved to local state.')
      setIsEditModalOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff] font-sans selection:bg-[#0066cc] selection:text-white pb-20">
      {/* Background Subtle Gradient Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,102,204,0.08)_0%,_transparent_60%)] pointer-events-none z-0" />

      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#0066cc] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#0066cc]/30 group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            SOCRATES
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Home
          </Link>
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0066cc] hover:bg-[#0071e3] text-white font-medium text-sm transition-all transform active:scale-95 shadow-lg shadow-[#0066cc]/20"
          >
            <Edit3 size={16} />
            Edit Profile
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-10 relative z-10 space-y-8">
        {/* Profile Hero Card */}
        <div className="relative rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066cc]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            {/* User Details Left */}
            <div className="flex items-center gap-6">
              <div className="relative group">
                <img
                  src={
                    user?.avatar ||
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
                  }
                  alt={user?.name || 'User Avatar'}
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#0066cc] shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="absolute bottom-0 right-0 p-2 bg-[#0066cc] hover:bg-[#0071e3] text-white rounded-full shadow-lg transition-transform hover:scale-110"
                  title="Change Avatar"
                >
                  <Edit3 size={14} />
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-display font-bold tracking-tight text-white">
                    {user?.name || 'Alex Rivera'}
                  </h1>
                  {user?.isVerified && (
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#0066cc]/20 border border-[#0066cc]/40 text-[#2997ff]"
                      title="Verified Educator & Scholar"
                    >
                      <ShieldCheck size={14} /> Verified
                    </span>
                  )}
                </div>

                <p className="text-sm text-white/60 font-medium">
                  {user?.email || 'alex.rivera@socrates.edu'}
                </p>

                <p className="text-sm text-white/80 max-w-xl line-clamp-2">
                  {user?.bio ||
                    'Computer Science Scholar & Peer Educator passionate about Data Structures, AI, and Collaborative Problem Solving.'}
                </p>
              </div>
            </div>

            {/* Quick Actions Right */}
            <div className="flex flex-col items-end gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2 p-1.5 bg-[#111111] rounded-2xl border border-white/10">
                <button
                  onClick={() => setPerspective('student')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activePerspective === 'student'
                      ? 'bg-[#0066cc] text-white shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <GraduationCap size={14} /> Student View
                </button>

                <button
                  onClick={() => setPerspective('tutor')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activePerspective === 'tutor'
                      ? 'bg-[#0066cc] text-white shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <UserCheck size={14} /> Tutor View
                </button>

                <button
                  onClick={() => setPerspective('both')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activePerspective === 'both'
                      ? 'bg-[#0066cc] text-white shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Layers size={14} /> Combined (Both)
                </button>
              </div>

              <div className="text-xs text-white/50 flex items-center gap-1.5">
                <Clock size={12} /> Member since{' '}
                {new Date(user?.createdAt || Date.now()).toLocaleDateString(
                  'en-US',
                  { month: 'short', year: 'numeric' }
                )}
              </div>
            </div>
          </div>
        </div>

        {/* PERSPECTIVE SECTION 1: COMBINED / BOTH VIEW (IF SELECTED) */}
        {(activePerspective === 'both' || activePerspective === 'student') && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#2997ff]">
                  Perspective 01
                </span>
                <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                  <GraduationCap className="text-[#2997ff]" size={24} /> Student
                  & Learner Profile
                </h2>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                Active Student Status: High Performer
              </span>
            </div>

            {/* Student HUD Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2 hover:border-[#0066cc]/40 transition-colors">
                <div className="flex items-center justify-between text-white/60 text-xs font-medium uppercase tracking-wider">
                  <span>Sessions Completed</span>
                  <BookOpen size={16} className="text-[#2997ff]" />
                </div>
                <div className="text-3xl font-display font-bold text-white">
                  28
                </div>
                <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <TrendingUp size={12} /> +4 this week
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2 hover:border-[#0066cc]/40 transition-colors">
                <div className="flex items-center justify-between text-white/60 text-xs font-medium uppercase tracking-wider">
                  <span>AI Questions Asked</span>
                  <Sparkles size={16} className="text-purple-400" />
                </div>
                <div className="text-3xl font-display font-bold text-white">
                  142
                </div>
                <div className="text-xs text-white/60">
                  98.2% Socratic resolution rate
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2 hover:border-[#0066cc]/40 transition-colors">
                <div className="flex items-center justify-between text-white/60 text-xs font-medium uppercase tracking-wider">
                  <span>Hours Consumed</span>
                  <Clock size={16} className="text-amber-400" />
                </div>
                <div className="text-3xl font-display font-bold text-white">
                  42.5 hrs
                </div>
                <div className="text-xs text-white/60">Across 4 core domains</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2 hover:border-[#0066cc]/40 transition-colors">
                <div className="flex items-center justify-between text-white/60 text-xs font-medium uppercase tracking-wider">
                  <span>Bookmarked Tutors</span>
                  <Bookmark size={16} className="text-[#0066cc]" />
                </div>
                <div className="text-3xl font-display font-bold text-white">
                  6 Tutors
                </div>
                <div className="text-xs text-[#2997ff]">2 Tutors online now</div>
              </div>
            </div>

            {/* Enrolled Subjects & Learning Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-4">
                <h3 className="text-lg font-display font-semibold text-white flex items-center justify-between">
                  <span>Enrolled Learning Subjects</span>
                  <span className="text-xs text-white/50 font-normal">
                    4 Active
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {user?.subjects && user.subjects.length > 0 ? (
                    user.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-[#111111] border border-white/10 text-xs font-medium text-white flex items-center gap-1.5"
                      >
                        <CheckCircle2 size={12} className="text-[#2997ff]" />
                        {sub}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-white/50">
                      No subjects added yet.
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-4">
                <h3 className="text-lg font-display font-semibold text-white">
                  Recent Study Room History
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#111111] border border-white/5 text-xs">
                    <div>
                      <div className="font-semibold text-white">
                        Algorithms & Data Structures Lounge
                      </div>
                      <div className="text-white/50">
                        Host: Dr. Evelyn Reed • Yesterday
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-semibold">
                      Completed
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#111111] border border-white/5 text-xs">
                    <div>
                      <div className="font-semibold text-white">
                        Linear Algebra Foundations
                      </div>
                      <div className="text-white/50">
                        Host: Marcus Chen • 3 days ago
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-semibold">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PERSPECTIVE SECTION 2: TUTOR VIEW (IF SELECTED OR BOTH) */}
        {(activePerspective === 'both' || activePerspective === 'tutor') && (
          <section className="space-y-6 pt-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#2997ff]">
                  Perspective 02
                </span>
                <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                  <UserCheck className="text-emerald-400" size={24} /> Verified
                  Tutor & Instructor Profile
                </h2>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                Accepting Students • ${user?.hourlyRate || 45}/hr
              </span>
            </div>

            {/* Tutor HUD Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center justify-between text-white/60 text-xs font-medium uppercase tracking-wider">
                  <span>Hourly Rate</span>
                  <DollarSign size={16} className="text-emerald-400" />
                </div>
                <div className="text-3xl font-display font-bold text-white">
                  ${user?.hourlyRate || 45}
                  <span className="text-sm font-normal text-white/50">
                    /hr
                  </span>
                </div>
                <div className="text-xs text-white/60">
                  Standard Tutoring Rate
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center justify-between text-white/60 text-xs font-medium uppercase tracking-wider">
                  <span>Average Rating</span>
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                </div>
                <div className="text-3xl font-display font-bold text-white">
                  4.96
                </div>
                <div className="text-xs text-white/60">From 54 student reviews</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center justify-between text-white/60 text-xs font-medium uppercase tracking-wider">
                  <span>Total Students Taught</span>
                  <UserCheck size={16} className="text-[#2997ff]" />
                </div>
                <div className="text-3xl font-display font-bold text-white">
                  86 Students
                </div>
                <div className="text-xs text-emerald-400">
                  100% On-time attendance
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-2 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center justify-between text-white/60 text-xs font-medium uppercase tracking-wider">
                  <span>Tutoring Earnings</span>
                  <Award size={16} className="text-purple-400" />
                </div>
                <div className="text-3xl font-display font-bold text-white">
                  $3,840
                </div>
                <div className="text-xs text-white/60">Escrow released cleanly</div>
              </div>
            </div>

            {/* Teaching Domains & Verified Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-4">
                <h3 className="text-lg font-display font-semibold text-white flex items-center justify-between">
                  <span>Teaching Expertise Domains</span>
                  <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="text-xs text-[#2997ff] hover:underline"
                  >
                    Edit Subjects
                  </button>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {user?.subjects && user.subjects.length > 0 ? (
                    user.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-[#0066cc]/10 border border-[#0066cc]/30 text-xs font-semibold text-[#2997ff] flex items-center gap-1.5"
                      >
                        <Sparkles size={12} /> {sub}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-white/50">
                      No subjects configured.
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-4">
                <h3 className="text-lg font-display font-semibold text-white">
                  Verified Instructor Badges
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111111] border border-white/5">
                    <ShieldCheck className="text-emerald-400" size={20} />
                    <div>
                      <div className="font-semibold text-white">
                        Stanford CS Academic Credential Verified
                      </div>
                      <div className="text-white/50">
                        Official Transcripts & Degree Audit Confirmed
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111111] border border-white/5">
                    <Star className="text-amber-400" size={20} />
                    <div>
                      <div className="font-semibold text-white">
                        Top 5% Rated Peer Instructor
                      </div>
                      <div className="text-white/50">
                        Maintained &gt;4.9 Rating for 6+ Consecutive Months
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* EDIT PROFILE MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 space-y-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                <Edit3 size={20} className="text-[#0066cc]" /> Edit SOCRATES
                Profile
              </h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-2 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-white/70 font-semibold block">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#0066cc]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-white/70 font-semibold block">
                  Avatar Image URL
                </label>
                <input
                  type="text"
                  value={formData.avatar}
                  onChange={(e) =>
                    setFormData({ ...formData, avatar: e.target.value })
                  }
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#0066cc]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-white/70 font-semibold block">
                    Hourly Tutoring Rate ($/hr)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={formData.hourlyRate}
                    onChange={(e) =>
                      setFormData({ ...formData, hourlyRate: Number(e.target.value) })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-[#0066cc]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/70 font-semibold block">
                    Teaching / Learning Subjects (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={formData.subjectsText}
                    onChange={(e) =>
                      setFormData({ ...formData, subjectsText: e.target.value })
                    }
                    placeholder="Algorithms, Python, React"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-[#0066cc]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-white/70 font-semibold block">
                  Bio / Statement
                </label>
                <textarea
                  rows={3}
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-[#0066cc]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2.5 rounded-xl bg-[#0066cc] hover:bg-[#0071e3] text-white font-medium transition-all shadow-lg shadow-[#0066cc]/20 flex items-center gap-2"
                >
                  {isSaving ? 'Saving...' : 'Save Profile Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
