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
      icon: Phone,
      label: "Phone 2",
      value: "+91 8851402795",
      href: "tel:+918851402795",
      color: "text-cosmic-blue"
    },
    {
      icon: Mail,
      label: "Email",
      value: "protonest1@gmail.com",
      href: "mailto:protonest1@gmail.com",
      color: "text-cosmic-purple"
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
    { city: "New Delhi", emoji: "🏛️", description: "Base Location & Headquarters" },
    { city: "Noida", emoji: "🏢", description: "Base Location & Tech Hub" },
    { city: "Remote Work", emoji: "🌐", description: "Worldwide Client Support" },
    { city: "Consultations", emoji: "💼", description: "Virtual & On-site Available" }
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

        <div className="grid lg:grid-cols-1 gap-16">

          {/* Contact Information */}
          <div className="space-y-8 max-w-2xl mx-auto">
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
                Service Coverage
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
                Availability & Approach
              </h3>
              <div className="space-y-4">
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
                    <div className="font-medium">Base Location</div>
                    <div className="text-sm text-muted-foreground">New Delhi & Noida, India</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Work Approach:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cosmic-teal" />
                      <span>Remote-first</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cosmic-purple" />
                      <span>Global timezone</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cosmic-pink" />
                      <span>On-site visits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cosmic-gold" />
                      <span>Agile delivery</span>
                    </div>
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
              Working remotely from New Delhi & Noida, we serve clients globally with 
              data analytics, Excel automation, and AI solutions. Whether you need a simple 
              spreadsheet cleanup or a complex machine learning system, we're here to help 
              you succeed with remote-first, data-driven solutions.
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