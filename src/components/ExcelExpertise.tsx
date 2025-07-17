import React from 'react'
import { FileSpreadsheet, BarChart3, Database, TrendingUp, Filter, PieChart } from 'lucide-react'

export function ExcelExpertise() {
  const excelServices = [
    {
      icon: Filter,
      title: "Data Cleaning & Preparation",
      description: "Transform messy, inconsistent data into clean, structured datasets ready for analysis.",
      features: [
        "Remove duplicates and inconsistencies",
        "Standardize formats and data types",
        "Handle missing values intelligently",
        "Text-to-columns and data parsing",
        "Conditional formatting for quality checks"
      ]
    },
    {
      icon: PieChart,
      title: "Advanced Analytics & Pivot Tables",
      description: "Create dynamic pivot tables and advanced analytics that update automatically with new data.",
      features: [
        "Automated pivot table creation",
        "Dynamic charts and visualizations",
        "Statistical analysis functions",
        "Trend analysis and forecasting",
        "Interactive dashboard creation"
      ]
    },
    {
      icon: TrendingUp,
      title: "VBA Automation & Macros",
      description: "Custom VBA solutions to automate repetitive tasks and create intelligent workflows.",
      features: [
        "Custom macro development",
        "Automated report generation",
        "Data import/export automation",
        "User form creation",
        "Error handling and validation"
      ]
    },
    {
      icon: Database,
      title: "Data Integration & Power Query",
      description: "Connect multiple data sources and create automated data refresh workflows.",
      features: [
        "Multi-source data connections",
        "Automated data refresh",
        "Power Query transformations",
        "API data integration",
        "Database connectivity"
      ]
    }
  ]

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex justify-center">
            <FileSpreadsheet className="w-16 h-16 text-cosmic-gold mb-4" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Excel Analytics Mastery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From chaotic spreadsheets to intelligent analytics systems - we transform your Excel workflows 
            with advanced data cleaning, automation, and analytics capabilities.
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        {/* Excel Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {excelServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="cosmic-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-cosmic-gold p-3 rounded-xl glass-strong">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cosmic-gold" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Case Study Example */}
        <div className="cosmic-card max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">
            Excel Transformation Case Study
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-red-400">❌ Before: The Problem</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Manual data entry taking 8 hours/week</li>
                  <li>• Inconsistent formatting across 50+ sheets</li>
                  <li>• Missing data and duplicate entries</li>
                  <li>• No automated reporting</li>
                  <li>• Error-prone manual calculations</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-400">✅ After: The Solution</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automated data import and cleaning</li>
                  <li>• Standardized templates with validation</li>
                  <li>• Smart duplicate detection and removal</li>
                  <li>• Daily automated reports via email</li>
                  <li>• Real-time dashboard with KPIs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-cosmic-gold">95%</div>
                <div className="text-xs text-muted-foreground">Time Saved</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-cosmic-teal">100%</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-cosmic-purple">₹2L+</div>
                <div className="text-xs text-muted-foreground">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}