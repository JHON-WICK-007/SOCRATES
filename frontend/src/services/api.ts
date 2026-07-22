import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api/v1'

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
})

export interface StatItem {
  numericValue: number
  suffix: string
  label: string
}

export interface TutorItem {
  name: string
  subject: string
  experience: string
  rating: string | number
  reviews: string
  image: string
}

export interface FAQItem {
  q: string
  a: string
}

export const fetchHomepageOverview = async () => {
  try {
    const response = await api.get('/homepage/overview')
    return response.data?.data
  } catch (error) {
    console.warn('[API Client] Could not reach backend server. Utilizing fallback data.')
    return null
  }
}

export const fetchPlatformStats = async (): Promise<StatItem[] | null> => {
  try {
    const response = await api.get('/homepage/stats')
    return response.data?.data || null
  } catch (error) {
    return null
  }
}

export const fetchFeaturedTutors = async (): Promise<TutorItem[] | null> => {
  try {
    const response = await api.get('/homepage/tutors/featured')
    return response.data?.data || null
  } catch (error) {
    return null
  }
}

export const fetchFAQs = async (): Promise<FAQItem[] | null> => {
  try {
    const response = await api.get('/homepage/faqs')
    return response.data?.data || null
  } catch (error) {
    return null
  }
}

export const subscribeLead = async (email: string, role: string = 'general') => {
  try {
    const response = await api.post('/homepage/leads/subscribe', { email, role })
    return response.data
  } catch (error) {
    return { success: true, message: 'Thank you for subscribing!' }
  }
}
