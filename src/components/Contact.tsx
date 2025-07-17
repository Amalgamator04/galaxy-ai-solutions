import React, { useState } from 'react'
import { Phone, Mail, Github, ExternalLink, Send, MapPin, Clock } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    })
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 73030 25805",
      href: "tel:+917303025805",
      color: "text-cosmic-blue"
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@prabhavvanshika.dev",
      href: "mailto:contact@prabhavvanshika.dev",
      color: "text-cosmic-purple"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "amalgamator04",
      href: "https://github.com/amalgamator04",
      color: "text-cosmic-pink"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      value: "View Live Projects",
      href: "#projects",
      color: "text-cosmic-teal"
    }
  ]

  const serviceAreas = [
    { city: "Delhi", emoji: "🏛️", description: "Government & Enterprise" },
    { city: "Mumbai", emoji: "🌆", description: "Finance & Startups" },
    { city: "Jaipur", emoji: "🏰", description: "Traditional & Modern Business" },
    { city: "Bengaluru", emoji: "🏢", description: "Tech & Innovation" }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your project.
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="cosmic-card">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="glass-strong"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="glass-strong"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, data challenges, or how we can help..."
                  className="glass-strong min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full cosmic-button group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="cosmic-card">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Get in touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-xl glass-strong hover:scale-105 transition-all duration-300 group"
                    >
                      <div className={`${info.color} p-2 rounded-lg glass`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Service Areas */}
            <div className="cosmic-card">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Service Areas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area) => (
                  <div key={area.city} className="text-center space-y-2 p-3 glass rounded-lg">
                    <div className="text-2xl">{area.emoji}</div>
                    <div className="font-medium text-sm">{area.city}</div>
                    <div className="text-xs text-muted-foreground">{area.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="cosmic-card">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cosmic-teal" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cosmic-purple" />
                  <div>
                    <div className="font-medium">Working Hours</div>
                    <div className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM IST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="cosmic-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Ready to Start Your Data Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you need a simple Excel automation or a complex AI system, 
              we're here to help you succeed with data-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="cosmic-button">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="cosmic-button">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}