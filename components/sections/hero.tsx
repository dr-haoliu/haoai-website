import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-100 via-white to-secondary-100 dark:from-surface-900 dark:via-surface-800 dark:to-surface-700">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/30 dark:[mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.15))]" />

      <Container className="relative">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20 px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <p className="text-primary-700 dark:text-primary-300 font-medium text-lg mb-4 tracking-wide">
              Advancing AI for Great Good
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-heading animate-slide-up">
              Agentic AI in
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Bioinformatics
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto font-sans">
              Pioneering the future of AI-driven biomedical research with cutting-edge agentic systems for discovering knowledge, accelerating drug discovery, and transforming healthcare.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay">
              <Link href="#publications" className="transition-transform duration-200 hover:scale-105">
                <Button size="lg" className="text-lg px-8 py-4 cursor-pointer">
                  Explore Research
                </Button>
              </Link>
              <Link href="/blog" className="transition-transform duration-200 hover:scale-105">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 cursor-pointer">
                  Latest News
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-surface-800 to-transparent" />
    </section>
  )
}