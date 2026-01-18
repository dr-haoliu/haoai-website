import { Navbar } from '@/components/layout/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Research } from '@/components/sections/research'
import { News } from '@/components/sections/news'
import { Projects } from '@/components/sections/projects'
import { Publications } from '@/components/sections/publications'
import { Team } from '@/components/sections/team'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <News />
      <Projects />
      <Publications />
      <Team />
      <Footer />
    </main>
  )
}