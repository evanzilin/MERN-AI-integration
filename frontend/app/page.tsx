'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    sex: '',
    age: '',
    national: '',
    job: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const params = new URLSearchParams({
      sex: formData.sex,
      age: formData.age,
      national: formData.national,
      job: formData.job,
    })
    
    router.push(`/results?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-valentine-light to-red-50 flex justify-center items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-w-6xl mx-auto">
          <div className="md:w-1/2 bg-cover">
              <div className="relative md:h-full h-60">
                  <img src="https://images.unsplash.com/photo-1739022113824-6b86cf63c4cf?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Desert landscape"
                      className="w-full h-full object-cover blur-sm" />
                  <div className="absolute inset-0 bg-blue-900/30"></div>
                  <div className="absolute bottom-12 left-12 text-white">
                      <h2 className="text-5xl md:text-6xl font-semibold mb-2">Valentine Gifts</h2>
                      <h2 className="text-2xl md:text-4xl font-semibold">Reach What You Imagine</h2>
                      <div className="flex gap-2 mt-6">
                          <div className="w-4 h-1 bg-white/30 rounded"></div>
                          <div className="w-4 h-1 bg-white/30 rounded"></div>
                          <div className="w-4 h-1 bg-white rounded"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <div className="text-center mb-12 hidden md:block">
              <h1 className="text-5xl font-bold text-valentine-red my-6">
                💝Gift Find💝
              </h1>
              <p className="text-xl text-gray-700">
                Tell us about your friend and we'll suggest the perfect gift!
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl px-8 py-10 mb-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    id="sex"
                    required
                    value={formData.sex}
                    onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valentine-pink focus:border-transparent"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    required
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full cursor px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valentine-pink focus:border-transparent"
                    placeholder="Enter age"
                  />
                </div>

                <div>
                  <label htmlFor="national" className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality *
                  </label>
                  <input
                    type="text"
                    id="national"
                    required
                    value={formData.national}
                    onChange={(e) => setFormData({ ...formData, national: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valentine-pink focus:border-transparent"
                    placeholder="e.g., American, Japanese"
                  />
                </div>

                <div>
                  <label htmlFor="job" className="block text-sm font-medium text-gray-700 mb-2">
                    Job/Profession *
                  </label>
                  <input
                    type="text"
                    id="job"
                    required
                    value={formData.job}
                    onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valentine-pink focus:border-transparent"
                    placeholder="e.g., Engineer, Teacher, Student"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-valentine-pink to-valentine-red text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Finding Gifts...' : 'Find Perfect Gifts 💝'}
                </button>
              </form>
            </div>
            <div className="text-center">
              <Link
                href="/admin"
                className="inline-block text-valentine-red hover:text-valentine-pink font-medium transition-colors"
              >
                Are you the store owner? Manage gifts →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

