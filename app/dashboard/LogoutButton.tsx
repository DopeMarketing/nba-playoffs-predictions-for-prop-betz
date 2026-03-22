'use client'

import { createClientComponentClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LogoutButton() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleLogout = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200"
    >
      {loading ? 'Signing out...' : 'Sign Out'}
    </button>
  )
}