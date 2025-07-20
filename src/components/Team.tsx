import React from 'react'
import { Github, Linkedin, Mail, Code, BarChart, Brain, Database } from 'lucide-react'
import { Button } from './ui/button'

export function Team() {
  const teamMembers = [
    {
      name: "Prabhav Sharma",
      role: "Lead Frontend Developer & AI Specialist",
      description: "Specializes in frontend development, React applications, and AI integrations. Expert in modern web technologies, responsive design, and turning complex requirements into beautiful user experiences.",
      avatar: "👨‍💻",
      skills: ["React", "Data Scientist", "Frontend Development", "Data Analytics"],
      expertise: ["Web Development", "UI/UX Design", "API Integration", "AI Solutions"],
      gradient: "from-cosmic-blue to-cosmic-purple"
    },
    {
      name: "Vanshika",
      role: "Data Strategist & Dashboard Expert",
      description: "Masters in creating stunning data visualizations and business intelligence solutions. Expert in Power BI, Excel automation, and transforming raw data into actionable insights.",
      avatar: "👩‍💻",
      skills: ["Power BI", "Excel Mastery", "Data Viz", "Business Intelligence"],
      expertise: ["Dashboard Design", "Data Strategy", "BI Solutions", "Analytics"],
      gradient: "from-cosmic-pink to-cosmic-teal"
    }
  ]

  const sharedSkills = [
    { icon: Code, label: "Full-Stack Development", color: "text-cosmic-blue" },
    { icon: BarChart, label: "Data Visualization", color: "text-cosmic-purple" },
    { icon: Brain, label: "AI & Machine Learning", color: "text-cosmic-pink" },
    { icon: Database, label: "Database Solutions", color: "text-cosmic-teal" }
  ]

  return (
    <section id="team" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developers and data experts based in Delhi & Noida, serving clients globally
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="cosmic-card text-center space-y-6"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Avatar */}
              <div className="relative mx-auto w-32 h-32">
                <img 
                  src={member.name === "Prabhav Sharma" ? "/src/assets/prabhav-profile.jpg" : "/src/assets/vanshika-profile.jpg"}
                  alt={member.name}
                  className={`w-full h-full rounded-full object-cover bg-gradient-to-br ${member.gradient} shadow-glow`}
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cosmic-teal rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-background rounded-full" />
                </div>
              </div>

              {/* Info */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold gradient-text">{member.name}</h3>
                <p className="text-cosmic-teal font-medium">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider">Core Skills</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider">Expertise</h4>
                <div className="grid grid-cols-2 gap-2">
                  {member.expertise.map((exp) => (
                    <div key={exp} className="text-sm text-muted-foreground">
                      • {exp}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="flex justify-center space-x-3 pt-4">
                <Button size="icon" variant="ghost" className="cosmic-button w-10 h-10">
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="cosmic-button w-10 h-10">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="cosmic-button w-10 h-10">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Shared Expertise */}
        <div className="cosmic-card">
          <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">
            Our Combined Expertise
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {sharedSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.label}
                  className="text-center space-y-3 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${skill.color} mx-auto w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <p className="font-medium text-sm">{skill.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Ready to work with us?
            </p>
            <Button 
              size="lg" 
              className="cosmic-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}