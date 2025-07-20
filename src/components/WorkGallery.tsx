import React from 'react'
import { ExternalLink, Eye } from 'lucide-react'
import { Button } from './ui/button'

interface WorkItem {
  id: string
  image: string
  title: string
  description: string
  category: string
  technologies: string[]
}

export function WorkGallery() {
  const workItems: WorkItem[] = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      title: 'Sales Analytics Dashboard',
      description: 'Comprehensive Power BI dashboard tracking sales performance, customer insights, and revenue trends with interactive visualizations and real-time data updates.',
      category: 'Data Visualization',
      technologies: ['Power BI', 'SQL', 'Excel']
    },
    {
      id: '2', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      title: 'Excel Automation System',
      description: 'Automated data processing system that reduced manual work by 90%. Features include data validation, automated reporting, and dynamic chart generation.',
      category: 'Process Automation',
      technologies: ['Excel VBA', 'Power Query', 'Pivot Tables']
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      title: 'Customer Segmentation Analysis',
      description: 'Machine learning-powered customer segmentation analysis helping businesses identify key customer groups and optimize marketing strategies.',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Matplotlib']
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop',
      title: 'Financial KPI Dashboard',
      description: 'Executive-level financial dashboard providing real-time insights into revenue, expenses, profit margins, and key performance indicators.',
      category: 'Business Intelligence',
      technologies: ['Tableau', 'SQL Server', 'DAX']
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      title: 'Inventory Management System',
      description: 'Smart inventory tracking system with predictive analytics for stock optimization, automated reordering, and supply chain insights.',
      category: 'Analytics System',
      technologies: ['Python', 'Pandas', 'Streamlit']
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800&h=600&fit=crop',
      title: 'Social Media Analytics',
      description: 'Comprehensive social media performance tracking with sentiment analysis, engagement metrics, and competitor benchmarking.',
      category: 'Social Analytics',
      technologies: ['Python', 'NLP', 'Power BI']
    }
  ]

  const categories = [...new Set(workItems.map(item => item.category))]

  return (
    <section id="work-gallery" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visual showcase of our data analytics projects and solutions
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <span
              key={category}
              className="skill-badge"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Work Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <div
              key={item.id}
              className="cosmic-card space-y-4 group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                    <Eye className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span className="text-xs px-2 py-1 rounded-full bg-cosmic-blue/20 text-cosmic-blue">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg group-hover:text-cosmic-blue transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full cosmic-button group-hover:bg-cosmic-blue group-hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="cosmic-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Ready for Your Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Each project is tailored to meet specific business needs. Let's discuss how we can create a similar solution for your organization.
            </p>
            <Button 
              size="lg" 
              className="cosmic-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}