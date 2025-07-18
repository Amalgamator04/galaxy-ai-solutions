import React from 'react'
import { ArrowDown, Sparkles, Zap, Database } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding">
      <div className="container-width text-center space-y-8">
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-cosmic-pink opacity-60 float" />
          <Zap className="absolute top-1/3 right-1/4 w-6 h-6 text-cosmic-teal opacity-50 float-delayed" />
          <Database className="absolute bottom-1/3 left-1/3 w-10 h-10 text-cosmic-purple opacity-40 float" />
        </div>

        {/* Main Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-cosmic-teal font-mono text-sm uppercase tracking-wider">
              Data Analytics & AI Automation
            </p>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              Analytics, AI Chatbots Agents and Web Developers
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Protonest - Turning Data Into Action with AI-Powered Solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in <span className="text-cosmic-teal font-semibold">New Delhi & Noida</span>, 
              working <span className="text-cosmic-purple font-semibold">remotely with clients worldwide</span>. 
              We specialize in web development with AI chatbot support for startups and businesses, data analytics, 
              dashboard building, and intelligent automation solutions. Available for online meetings and on-site consultations.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="skill-badge">🏠 Delhi & Noida Base</span>
              <span className="skill-badge">🌐 Remote Worldwide</span>
              <span className="skill-badge">📊 Excel Masters</span>
              <span className="skill-badge">🤖 AI Specialists</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="cosmic-button group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Services
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cosmic-button border-cosmic-teal text-cosmic-teal"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cosmic-teal rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cosmic-teal rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}