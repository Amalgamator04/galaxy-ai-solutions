import React from 'react'
import { Target, Users, Globe, Award } from 'lucide-react'

export function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "5+", color: "text-cosmic-blue" },
    { icon: Globe, label: "Cities Served", value: "4", color: "text-cosmic-purple" },
    { icon: Target, label: "Projects Completed", value: "15+", color: "text-cosmic-pink" },
    { icon: Award, label: "Years Experience", value: "3+", color: "text-cosmic-teal" }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                About Us
              </h2>
              <div className="w-24 h-1 bg-cosmic-gradient rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are <span className="aurora-text font-semibold">Prabhav Sharma & Vanshika</span>, 
                freelance data and AI consultants helping businesses turn data into action. From automating 
                dashboards to deploying AI agents, we provide complete analytics solutions.
              </p>
              
              <p>
                With strong experience in tools like <span className="text-cosmic-teal font-mono">Python</span>, 
                <span className="text-cosmic-purple font-mono"> Excel</span>, 
                <span className="text-cosmic-pink font-mono"> Power BI</span>, 
                <span className="text-cosmic-blue font-mono"> FastAPI</span>, and 
                <span className="text-cosmic-gold font-mono"> Streamlit</span>, we've helped clients 
                across industries clean their data, visualize insights, and implement intelligent assistants 
                that actually work.
              </p>
              
              <p>
                We believe in building <span className="gradient-text font-semibold">scalable, ethical, 
                and beautiful AI tools</span>. Whether you're a startup or a scaling business — we design 
                solutions tailored to your data and goals.
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