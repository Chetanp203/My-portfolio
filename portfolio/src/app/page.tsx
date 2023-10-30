import Experience from '@/Components/Experience'
import Hero from '@/Components/Hero'
import Projects from '@/Components/Projects'
import Skills from '@/Components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
      <Skills/>
      <Experience/>
    </main>
  )
}
