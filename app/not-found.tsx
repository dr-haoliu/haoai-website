import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-6">404</h1>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or doesn't exist.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Go Home
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium"
            >
              View Blog Posts
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              You might be looking for:
            </p>
            <ul className="text-left max-w-md mx-auto text-slate-600 dark:text-slate-400 space-y-2">
              <li>
                <Link href="#about" className="text-blue-600 dark:text-blue-400 hover:underline">
                  About HaoAI
                </Link>
              </li>
              <li>
                <Link href="#research" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Latest News & Updates
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="#publications" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Meet the Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}