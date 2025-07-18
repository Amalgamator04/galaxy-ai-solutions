import { Home, User, Briefcase, Wrench, Users, FolderOpen, MessageSquare, Phone, Zap } from 'lucide-react'

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "About", url: "#about", icon: User },
  { title: "Skills", url: "#skills", icon: Wrench },
  { title: "Services", url: "#services", icon: Briefcase },
  { title: "Team", url: "#team", icon: Users },
  { title: "Projects", url: "#projects", icon: FolderOpen },
  { title: "Reviews", url: "#testimonials", icon: MessageSquare },
  { title: "Contact", url: "#contact", icon: Phone },
]

export function AppSidebar() {
  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed left-0 top-0 h-full w-64 glass-strong border-r border-white/20 z-40">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 cosmic-bg rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="font-bold text-lg gradient-text">
            Protonest
          </div>
        </div>
        
        <nav className="space-y-2">
          {items.map((item) => (
            <button
              key={item.title}
              onClick={() => scrollToSection(item.url)}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}