import React from 'react'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import { GalacticBackground } from '@/components/GalacticBackground'
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
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <GalacticBackground />
        <AppSidebar />
        <SidebarInset>
          <div className="flex-1">
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
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
