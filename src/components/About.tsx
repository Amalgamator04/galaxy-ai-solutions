import React from 'react'
import { Target, Users, Globe, Award } from 'lucide-react'

export function About() {
  const stats = [
    { icon: Users, label: "Remote Clients", value: "5+", color: "text-cosmic-blue" },
    { icon: Globe, label: "States Served", value: "5+", color: "text-cosmic-purple" },
    { icon: Target, label: "Projects Completed", value: "10+", color: "text-cosmic-pink" },
    { icon: Award, label: "Years Experience", value: "2+", color: "text-cosmic-teal" }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                About Us
              </h2>
              <div className="w-24 h-1 bg-cosmic-gradient rounded-full" />
            </div>

            <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                We are <span className="aurora-text font-semibold">Protonest</span> - a data analytics and AI automation team 
                helping startups and businesses turn data into action. Based in 
                <span className="text-cosmic-teal font-semibold"> New Delhi & Noida</span>, we work 
                <span className="text-cosmic-purple font-semibold"> remotely with clients worldwide</span>, 
                providing complete analytics solutions, AI chatbot integrations, and modern web development.
              </p>
              
              <p>
                Our expertise spans <span className="text-cosmic-teal font-mono">Data Analytics</span>, 
                <span className="text-cosmic-purple font-mono"> Dashboard Building</span>, 
                <span className="text-cosmic-pink font-mono"> AI Chatbots for Websites</span>, 
                <span className="text-cosmic-blue font-mono"> Web Development</span>, and 
                <span className="text-cosmic-gold font-mono"> Automation Solutions</span>. We offer flexible engagement 
                through online meetings for project discussions and on-site consultations when needed. Pricing is 
                customized based on project scope and requirements.
              </p>
              
              <p>
                We believe in building <span className="gradient-text font-semibold">scalable, ethical, 
                and beautiful data solutions</span>. Whether you're a local startup or an international 
                enterprise, we design remote-first solutions tailored to your data challenges and business goals.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="cosmic-card text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${stat.color} mb-4 flex justify-center`}>
                    <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-2">
                    <div className={`text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}