import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Doctor Burnout Prevention Platform",
      description: "Microservices platform serving 5K+ healthcare providers with Spring Boot, MongoDB, and Kafka. Achieved 99.9% uptime on Azure Kubernetes Service.",
      image: "https://pixabay.com/get/gbd8c270829a3f4326f9615b902d0dd0ba33fbe78b7c56efb2fd24eea6890053f0f7c7358fa358c802e95fb37946094611774acde104f11007f9c5de0bdbf3c4a_1280.jpg",
      technologies: ["Spring Boot", "MongoDB", "Azure AKS", "Kafka"],
      github: "#",
      demo: "#"
    },
    {
      title: "Cloud-Native Food Delivery",
      description: "Full-stack platform with Java 17, PostgreSQL, and React.js. Deployed on AWS ECS, supporting 1K+ daily transactions with 20% improved API latency.",
      image: "https://pixabay.com/get/g7e99e7fa20b8d52c5091d2a87ad06bfaf2f3869bc60c7ba189ad7f5f12fd07382207d0e075e10dd83c54c714f93c38d4fa451a62e64a8d1787f602280aa454e1_1280.jpg",
      technologies: ["Java 17", "React.js", "AWS ECS", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Enterprise Job Tracker",
      description: "Microservices-based system used by 10K+ employees at Accenture. Achieved 90%+ test coverage and 30% defect reduction.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Microservices", "Jenkins", "OAuth2", "JUnit"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20" data-testid="projects-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glassmorphism rounded-xl overflow-hidden card-hover group" data-testid={`project-card-${index}`}>
              <img 
                src={project.image}
                alt={`${project.title} Interface`}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                data-testid={`project-image-${index}`}
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="text-primary hover:text-secondary transition-colors"
                      data-testid={`project-github-${index}`}
                    >
                      <a href={project.github}>
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="text-secondary hover:text-accent transition-colors"
                      data-testid={`project-demo-${index}`}
                    >
                      <a href={project.demo}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 rounded text-xs bg-secondary/20 text-[#9767e4]"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
