import React from 'react'
import { Code, Database, BarChart3, Brain, Cog, Globe } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      title: "Core Competencies",
      icon: Brain,
      color: "text-cosmic-blue",
      skills: [
        "Data Cleaning & EDA",
        "Insight Generation", 
        "ML Modeling",
        "Regression & Classification",
        "Dashboarding & BI",
        "NLP & Agent Design",
        "Chatbot Integration",
        "End-to-End Deployment"
      ]
    },
    {
      title: "Languages & Libraries",
      icon: Code,
      color: "text-cosmic-purple",
      skills: [
        "Python", "SQL", "HTML", "JavaScript",
        "Pandas", "Seaborn", "Matplotlib", "Plotly", 
        "Scikit-learn", "TensorFlow", "NumPy", "Streamlit"
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Cog,
      color: "text-cosmic-pink",
      skills: [
        "FastAPI", "Flask", "Streamlit",
        "Power BI", "MS Excel", "Tableau",
        "Git", "Docker", "VSCode", 
        "GitHub Pages", "Botpress"
      ]
    }
  ]

  const progressSkills = [
    { name: "Python", level: 95, color: "bg-cosmic-blue" },
    { name: "Data Analysis", level: 90, color: "bg-cosmic-purple" },
    { name: "Machine Learning", level: 85, color: "bg-cosmic-pink" },
    { name: "Dashboard Design", level: 92, color: "bg-cosmic-teal" },
    { name: "AI Integration", level: 88, color: "bg-cosmic-gold" }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive toolkit for building intelligent data solutions
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div 
                key={category.title}
                className="cosmic-card space-y-6"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`${category.color} p-3 rounded-xl glass`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill}
                      className="skill-badge"
                      style={{ 
                        animationDelay: `${(index * 0.2) + (skillIndex * 0.05)}s`,
                        animation: 'fade-in-up 0.6s ease-out forwards'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Progress Bars */}
        <div className="cosmic-card max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">
            Expertise Levels
          </h3>
          <div className="space-y-6">
            {progressSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}