import React from 'react'
import { Heart, Zap, Github, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  const services = [
    { label: 'AI Chatbots', href: '#services' },
    { label: 'Data Dashboards', href: '#services' },
    { label: 'ML Models', href: '#services' },
    { label: 'Excel Automation', href: '#services' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/amalgamator04', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@prabhavvanshika.dev', label: 'Email' },
    { icon: Phone, href: 'tel:+917303025805', label: 'Phone' }
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <footer className="section-padding bg-gradient-to-t from-muted/50 to-transparent">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 cosmic-bg rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-lg gradient-text">
                Protonest
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based in New Delhi & Noida, serving clients remotely worldwide. 
              Transforming businesses with data analytics, Excel automation, and AI solutions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <button
                    key={social.label}
                    onClick={() => scrollToSection(social.href)}
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:scale-110 transition-transform group"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-cosmic-blue transition-colors" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider gradient-text">
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider gradient-text">
              Services
            </h3>
            <div className="space-y-2">
              {services.map((service) => (
                <button
                  key={service.label}
                  onClick={() => scrollToSection(service.href)}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider gradient-text">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cosmic-teal" />
                <span className="text-muted-foreground">+91 73030 25805</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cosmic-purple" />
                <span className="text-muted-foreground">protonest@gmail.com</span>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-cosmic-pink">Base Location:</div>
                <div className="text-muted-foreground">New Delhi & Noida, India</div>
                <div className="text-muted-foreground">Remote work worldwide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Protonest. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for data-driven businesses</span>
            </div>
          </div>

          {/* Additional Credits */}
          <div className="mt-6 pt-6 border-t border-border/30 text-center">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span>🏠 Based in Delhi & Noida</span>
              <span>🌐 Remote Work Globally</span>
              <span>📊 Excel Analytics Experts</span>
              <span>🤖 Custom AI Solutions</span>
              <span>📈 Data Cleaning Masters</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}