import { ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Saint Louis University",
      location: "St. Louis, MO",
      period: "Jul 2024 – Apr 2025",
      color: "primary",
      achievements: [
        "Designed Doctor Burnout Prevention Platform serving 5K+ healthcare providers with 30% improved API response times",
        "Deployed secure services on Azure Kubernetes Service achieving 99.9% uptime",
        "Implemented OAuth2/JWT authentication for HIPAA-compliant access control"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Saint Louis University",
      location: "St. Louis, MO",
      period: "Jan 2024 – Jun 2024",
      color: "secondary",
      achievements: [
        "Built cloud-native food delivery platform reducing API latency by 20%",
        "Deployed REST APIs on AWS EC2/S3 supporting 1K+ daily transactions",
        "Containerized services with Docker, reducing release cycles from 2 weeks to 3 days"
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Accenture Solutions Pvt. Ltd.",
      location: "Hyderabad, India",
      period: "Jun 2021 – Jun 2023",
      color: "accent",
      achievements: [
        "Developed job tracking system for 10K+ employees with 90%+ test coverage",
        "Automated CI/CD pipelines reducing deployment effort by 50%",
        "Mentored 5+ junior developers improving team productivity"
      ]
    },
    {
      title: "Java Developer Intern",
      company: "Newton School",
      location: "Remote, Bengaluru",
      period: "Jun 2020 – Apr 2021",
      color: "primary",
      achievements: [
        "Built multiple CRUD applications with Java, Spring Boot, and React.js",
        "Developed reusable components improving delivery speed by 15%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-transparent" data-testid="experience-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="experience-title">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0" data-testid={`experience-item-${index}`}>
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
              {index < experiences.length - 1 && (
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent"></div>
              )}
              
              <div className="glassmorphism p-6 rounded-xl ml-6 card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary" data-testid={`experience-title-${index}`}>
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`experience-company-${index}`}>
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`experience-period-${index}`}>
                    {experience.period}
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start" data-testid={`experience-achievement-${index}-${achievementIndex}`}>
                      <ChevronRight className={`text-${experience.color} mr-2 mt-1 h-3 w-3 flex-shrink-0`} />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
