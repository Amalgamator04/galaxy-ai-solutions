import React from 'react'
import { Code, Database, BarChart3, Brain, Cog, Globe, Monitor, Zap } from 'lucide-react'

export function Technologies() {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-cosmic-blue",
      technologies: [
        "Python", "SQL", "HTML", "CSS",
        "R", "VBA", "DAX", "Power Query"
      ]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      color: "text-cosmic-purple",
      technologies: [
        "Power BI", "Tableau", "Excel",
        "Pandas", "NumPy", "Matplotlib", 
        "Seaborn", "Plotly", "Scikit-learn"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-cosmic-pink",
      technologies: [
        "TensorFlow", "Scikit-learn", "OpenAI API",
        "Chatbot Development", "NLP", "Computer Vision",
        "Predictive Modeling", "Neural Networks"
      ]
    },
    {
      title: "Web Technologies",
      icon: Monitor,
      color: "text-cosmic-teal",
      technologies: [
        "React", "TypeScript", "Node.js",
        "REST APIs", "FastAPI", "Flask",
        "HTML5", "CSS3", "Tailwind CSS"
      ]
    },
    {
      title: "Development Tools",
      icon: Cog,
      color: "text-cosmic-gold",
      technologies: [
        "Git", "GitHub", "VSCode",
        "Docker", "Jupyter", "Google Colab",
        "Postman", "Chrome DevTools"
      ]
    },
    {
      title: "Cloud & Deployment",
      icon: Globe,
      color: "text-cosmic-accent",
      technologies: [
        "GitHub Pages", "Streamlit Cloud",
        "Heroku", "AWS", "Google Cloud",
        "Vercel", "Netlify", "Firebase"
      ]
    }
  ]

  return (
    <section id="technologies" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Technologies We Work With
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive tech stack for building modern data solutions
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div 
                key={category.title}
                className="cosmic-card space-y-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`${category.color} p-3 rounded-xl glass`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="skill-badge"
                      style={{ 
                        animationDelay: `${(index * 0.1) + (techIndex * 0.03)}s`,
                        animation: 'fade-in-up 0.6s ease-out forwards'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech Stats */}
        <div className="cosmic-card max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">
            Our Technology Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cosmic-blue">15+</div>
              <div className="text-sm text-muted-foreground">Programming Languages</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cosmic-purple">25+</div>
              <div className="text-sm text-muted-foreground">Tools & Frameworks</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cosmic-pink">10+</div>
              <div className="text-sm text-muted-foreground">Cloud Platforms</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cosmic-teal">100%</div>
              <div className="text-sm text-muted-foreground">Modern Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}