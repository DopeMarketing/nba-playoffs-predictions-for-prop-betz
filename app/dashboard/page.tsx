import { createServerComponentClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LogoutButton from './LogoutButton'

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                NBA Playoffs Predictions Dashboard
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Welcome back, {user.email}
              </p>
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Player Comparisons</h3>
                <p className="text-sm text-gray-600">Compare NBA players side-by-side</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Advanced Analytics</h3>
                <p className="text-sm text-gray-600">PER, TS%, and trend analysis</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Player Search</h3>
                <p className="text-sm text-gray-600">Find and filter players</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Statistical Analysis Tools</h2>
            <p className="text-sm text-gray-600 mt-1">
              Access comprehensive NBA player statistics and performance metrics for prop betting insights.
            </p>
          </div>
          <div className="p-6">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                Advanced player comparison tools, statistical analysis dashboards, and prop betting insights are being developed.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900">Season Averages</h4>
                  <p className="text-sm text-blue-600 mt-1">Current season stats</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900">Trend Analysis</h4>
                  <p className="text-sm text-purple-600 mt-1">Performance trends</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900">Advanced Metrics</h4>
                  <p className="text-sm text-orange-600 mt-1">PER, TS%, efficiency</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900">Visual Charts</h4>
                  <p className="text-sm text-green-600 mt-1">Interactive graphs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}