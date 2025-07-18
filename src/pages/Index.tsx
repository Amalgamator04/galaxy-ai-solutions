import React from 'react'
import { GalacticBackground } from '@/components/GalacticBackground'
import { AppSidebar } from '@/components/AppSidebar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Services } from '@/components/Services'
import { ExcelExpertise } from '@/components/ExcelExpertise'
import { Team } from '@/components/Team'
import { Projects } from '@/components/Projects'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <GalacticBackground />
      <AppSidebar />
      <main className="flex-1 ml-64">
        <Hero />
        <About />
        <Skills />
        <Services />
        <ExcelExpertise />
        <Team />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
