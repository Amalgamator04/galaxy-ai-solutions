import React from 'react'
import { Github, ExternalLink, Bot, BarChart3, FileSpreadsheet, Search, Users, Zap } from 'lucide-react'
import { Button } from './ui/button'

export function Projects() {
  const projects = [
    {
      title: "Restaurant Recommender Chatbot",
      summary: "AI-powered chatbot that provides personalized restaurant recommendations based on user preferences, location, and dietary restrictions.",
      icon: Bot,
      technologies: ["Python", "NLP", "FastAPI", "Streamlit"],
      color: "text-cosmic-blue",
      gradient: "from-cosmic-blue/20 to-cosmic-purple/10"
    },
    {
      title: "Flight Crash Survival Analytics",
      summary: "Comprehensive Power BI dashboard analyzing survival rates by airline, class, and seat location with interactive visualizations.",
      icon: BarChart3,
      technologies: ["Power BI", "Data Analysis", "Statistical Modeling"],
      color: "text-cosmic-purple",
      gradient: "from-cosmic-purple/20 to-cosmic-pink/10"
    },
    {
      title: "Excel Sales Pipeline Automation",
      summary: "Automated Excel solution for tracking sales pipeline with dynamic reporting, forecasting, and performance analytics.",
      icon: FileSpreadsheet,
      technologies: ["Excel VBA", "Power Query", "Data Modeling"],
      color: "text-cosmic-pink",
      gradient: "from-cosmic-pink/20 to-cosmic-teal/10"
    },
    {
      title: "KDP Content QA Alert System",
      summary: "Quality assurance system for Kindle Direct Publishing content with automated alerts and content validation workflows.",
      icon: Search,
      technologies: ["Python", "Automation", "Web Scraping", "Alerts"],
      color: "text-cosmic-teal",
      gradient: "from-cosmic-teal/20 to-cosmic-gold/10"
    },
    {
      title: "AI Query Resolver for Business Teams",
      summary: "Intelligent system that resolves business queries using natural language processing and connects to company databases.",
      icon: Users,
      technologies: ["NLP", "FastAPI", "Database Integration", "AI"],
      color: "text-cosmic-gold",
      gradient: "from-cosmic-gold/20 to-cosmic-blue/10"
    },
    {
      title: "Real-Time Analytics Dashboard",
      summary: "Live dashboard for monitoring business KPIs with real-time data streaming and automated alerts for critical metrics.",
      icon: Zap,
      technologies: ["Streamlit", "Real-time Data", "APIs", "Monitoring"],
      color: "text-cosmic-blue",
      gradient: "from-cosmic-blue/20 to-cosmic-purple/10"
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Previous Work & Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise through real-world solutions and innovative projects
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="cosmic-card group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`${project.color} p-3 rounded-xl glass-strong`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" className="w-8 h-8">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="w-8 h-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold leading-tight group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-muted/50 border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full cosmic-button text-sm"
                  >
                    View Details
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Case Study Highlight */}
        <div className="mt-16">
          <div className="cosmic-card max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold gradient-text mb-2">
                Featured Case Study
              </h3>
              <p className="text-muted-foreground">
                Deep dive into our Flight Crash Analytics project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Flight Crash Analytics Dashboard</h4>
                <p className="text-muted-foreground leading-relaxed">
                  A comprehensive Power BI solution analyzing aviation safety data to identify 
                  survival patterns and risk factors across different airlines, aircraft types, 
                  and passenger demographics.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-cosmic-blue/20 flex items-center justify-center">
                      <span className="text-cosmic-blue text-xs font-bold">1</span>
                    </div>
                    <span className="text-sm">Data Loading & Cleaning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-cosmic-purple/20 flex items-center justify-center">
                      <span className="text-cosmic-purple text-xs font-bold">2</span>
                    </div>
                    <span className="text-sm">Feature Engineering & EDA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-cosmic-pink/20 flex items-center justify-center">
                      <span className="text-cosmic-pink text-xs font-bold">3</span>
                    </div>
                    <span className="text-sm">Statistical Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-cosmic-teal/20 flex items-center justify-center">
                      <span className="text-cosmic-teal text-xs font-bold">4</span>
                    </div>
                    <span className="text-sm">Interactive Dashboard Creation</span>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h5 className="font-semibold mb-2">Key Insights Delivered</h5>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Survival rate patterns by seat location</div>
                  <div>• Airline safety comparisons</div>
                  <div>• Risk factor correlations</div>
                  <div>• Interactive filtering capabilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Want to see more of our work?
            </p>
            <Button 
              size="lg" 
              className="cosmic-button"
              onClick={() => window.open('https://github.com/amalgamator04', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}