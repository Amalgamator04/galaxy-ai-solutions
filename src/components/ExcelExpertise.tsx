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

      </div>
    </section>
  )
}