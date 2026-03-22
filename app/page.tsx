import Link from 'next/link'
import { createServerComponentClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            NBA Playoffs Predictions
            <span className="block text-3xl text-orange-400 mt-2">for Prop Betz</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced statistical analysis tool for NBA player comparisons. Compare performance metrics, 
            analyze trends, and get data-driven insights for better prop betting decisions.
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Player Comparisons</h3>
              <p className="text-gray-300">
                Compare multiple NBA players across various statistics and performance metrics side-by-side.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
              <p className="text-gray-300">
                Get insights through PER, TS%, and other advanced metrics with trend analysis.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Filtering</h3>
              <p className="text-gray-300">
                Search and filter players by position, team, or performance criteria to find the data you need.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="space-x-4">
              <Link 
                href="/signup" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
              >
                Get Started
              </Link>
              <Link 
                href="/login" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/30 transition duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-white">
              <div className="text-3xl font-bold text-orange-400">500+</div>
              <div className="text-sm text-gray-300">NBA Players</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-purple-400">25+</div>
              <div className="text-sm text-gray-300">Key Metrics</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-blue-400">Real-time</div>
              <div className="text-sm text-gray-300">Season Data</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-green-400">Advanced</div>
              <div className="text-sm text-gray-300">Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}