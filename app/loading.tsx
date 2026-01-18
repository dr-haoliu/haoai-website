export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="animate-pulse">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-20" />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg w-3/4" />
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-lg w-full" />
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-lg w-2/3" />
          </div>
        </div>
      </div>
    </div>
  )
}