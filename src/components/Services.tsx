import React from 'react'
import { Bot, Globe, BarChart3, Brain, FileSpreadsheet, TrendingUp } from 'lucide-react'
import { Button } from './ui/button'

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "AI Assistant & Chatbot Development",
      description: "Build smart AI agents or site-integrated bots to answer queries, assist customers, or automate routine tasks.",
      features: ["Custom AI Agents", "Website Integration", "FastAPI + Botpress", "Customer Support Automation"],
      color: "text-cosmic-blue",
      gradient: "from-cosmic-blue/20 to-cosmic-purple/10"
    },
    {
      icon: Globe,
      title: "Website Development (With or Without AI)",
      description: "Fully responsive and stunning websites with smart integrations, analytics panels, and chatbot support.",
      features: ["Responsive Design", "AI Integration", "Analytics Dashboards", "Modern UI/UX"],
      color: "text-cosmic-purple",
      gradient: "from-cosmic-purple/20 to-cosmic-pink/10"
    },
    {
      icon: BarChart3,
      title: "Data Dashboards",
      description: "Get beautifully designed dashboards to track KPIs, trends, and business health visually and interactively.",
      features: ["Power BI", "Streamlit Apps", "Excel Dashboards", "Real-time Analytics"],
      color: "text-cosmic-pink",
      gradient: "from-cosmic-pink/20 to-cosmic-teal/10"
    },
    {
      icon: Brain,
      title: "Predictive ML Models",
      description: "Need churn prediction or sales forecasting? We train models and deploy them into usable APIs and dashboards.",
      features: ["Churn Prediction", "Sales Forecasting", "API Deployment", "Model Monitoring"],
      color: "text-cosmic-teal",
      gradient: "from-cosmic-teal/20 to-cosmic-gold/10"
    },
    {
      icon: FileSpreadsheet,
      title: "Excel Data Analytics & Automation",
      description: "Transform messy Excel sheets into clean, automated analytics powerhouses with advanced data cleaning, pivot automation, and intelligent reporting systems.",
      features: ["Advanced Data Cleaning", "Automated Pivot Tables", "VBA Scripting", "Formula Optimization", "Data Validation", "Interactive Dashboards"],
      color: "text-cosmic-gold",
      gradient: "from-cosmic-gold/20 to-cosmic-blue/10"
    },
    {
      icon: TrendingUp,
      title: "Data Analytics & Dashboard Building",
      description: "Transform raw data into actionable insights with interactive dashboards, KPI tracking, and automated reporting solutions.",
      features: ["Data Analytics", "Dashboard Building", "AI Chatbots for Websites", "Business Intelligence"],
      color: "text-cosmic-blue",
      gradient: "from-cosmic-blue/20 to-cosmic-purple/10"
    }
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Services We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development and AI solutions from our Delhi & Noida base locations
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="service-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon & Title */}
                <div className="space-y-4 mb-6">
                  <div className={`${service.color} p-4 rounded-2xl glass-strong w-fit`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full cosmic-button group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="cosmic-card max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Ready to Transform Your Data?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help turn your data into actionable insights and automated solutions.
            </p>
            <Button 
              size="lg" 
              className="cosmic-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}