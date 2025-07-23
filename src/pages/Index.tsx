import React from 'react'
import { GalacticBackground } from '@/components/GalacticBackground'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Technologies } from '@/components/Technologies'
import { Services } from '@/components/Services'
import { ExcelExpertise } from '@/components/ExcelExpertise'
import { Team } from '@/components/Team'
import { Projects } from '@/components/Projects'
import { InteractiveReviews } from '@/components/InteractiveReviews'
import { Contact } from '@/components/Contact'
import { WorkGallery } from '@/components/WorkGallery'
import { Footer } from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GalacticBackground />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Services />
      <ExcelExpertise />
      <Team />
      <Projects />
      <InteractiveReviews />
      <WorkGallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
