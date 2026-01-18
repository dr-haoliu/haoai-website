import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-surface-900 dark:via-surface-800 dark:to-surface-700">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/50 dark:[mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.2))]" />
      
      <Container className="relative">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20 px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-4">
              Advancing AI for Great Good
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-slide-up">
              Agentic AI in
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Bioinformatics
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Pioneering the future of AI-driven biomedical research with cutting-edge agentic systems for discovering knowledge, accelerating drug discovery, and transforming healthcare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button size="lg" className="text-lg px-8 py-4">
                Explore Research
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Latest News
              </Button>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-surface-800 to-transparent" />
    </section>
  )
}