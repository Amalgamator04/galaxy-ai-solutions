import React from 'react'
import { GalacticBackground } from '@/components/GalacticBackground'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Services } from '@/components/Services'
import { Team } from '@/components/Team'
import { Projects } from '@/components/Projects'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GalacticBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Team />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
