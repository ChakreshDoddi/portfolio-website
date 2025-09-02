import { Code, Layers, Cloud, Database, CheckCircle, BarChart } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      color: "text-primary",
      skills: [
        { name: "Java (up to 17)", level: 95 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      icon: Layers,
      title: "Frameworks",
      color: "text-secondary",
      badges: ["Spring Boot", "Spring Cloud", "React.js", "Angular", "Hibernate"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-accent",
      badges: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-primary",
      badges: ["MySQL", "PostgreSQL", "Oracle 12c/19c", "MongoDB", "DynamoDB"]
    },
    {
      icon: CheckCircle,
      title: "Testing & Quality",
      color: "text-accent",
      items: [
        { icon: "🧪", name: "JUnit & Mockito" },
        { icon: "🛡️", name: "SonarQube" },
        { icon: "🔀", name: "TDD Practices" }
      ]
    },
    {
      icon: BarChart,
      title: "Monitoring",
      color: "text-secondary",
      items: [
        { icon: "👁️", name: "Prometheus" },
        { icon: "📊", name: "Grafana" },
        { icon: "☁️", name: "CloudWatch" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-muted/20" data-testid="skills-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="skills-title">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise in modern technologies and frameworks for building scalable enterprise applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl card-hover" data-testid={`skill-card-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mr-4 animate-pulse">
                  <category.icon className={`text-3xl ${category.color} drop-shadow-lg`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              {category.skills && (
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span>{skill.name}</span>
                      <div className="w-24 bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {category.badges && (
                <div className="flex flex-wrap gap-2">
                  {category.badges.map((badge, badgeIndex) => (
                    <span 
                      key={badgeIndex}
                      className="tech-badge px-3 py-1 bg-secondary/20 rounded-full text-sm text-foreground"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              
              
              {category.items && (
                <div className="space-y-3 text-sm">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 mr-3 animate-pulse">
                        <span className="text-lg drop-shadow-lg text-foreground">{item.icon}</span>
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
