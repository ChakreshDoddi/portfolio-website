import { Trophy, Award, Lightbulb, Heart } from "lucide-react";
import { SiAmazon, SiOracle } from "react-icons/si";

export default function CertificationsSection() {
  const certifications = [
    {
      icon: SiAmazon,
      title: "AWS Certified Developer",
      subtitle: "Associate Level",
      status: "In Progress",
      statusColor: "accent"
    },
    {
      icon: SiOracle,
      title: "Oracle Java SE 17",
      subtitle: "Professional Level",
      status: "Planned",
      statusColor: "primary"
    },
    {
      icon: "⚙️",
      title: "Kubernetes CKA",
      subtitle: "Administrator Level",
      status: "Planned",
      statusColor: "secondary"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Mathematics Olympiad Winner",
      subtitle: "1st Rank Statewide",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Robotics Competition",
      subtitle: "1st Place - Engineers' Day",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Smart India Hackathon",
      subtitle: "2020 Finalist",
      color: "text-secondary"
    },
    {
      icon: Heart,
      title: "Mental Health Advocate",
      subtitle: "University Campaign Organizer",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20" data-testid="certifications-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="certifications-title">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div key={index} className="glassmorphism p-6 rounded-xl card-hover" data-testid={`certification-${index}`}>
              <div className="flex items-center mb-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-4 animate-glow">
                  {typeof cert.icon === 'string' ? (
                    <span className="text-3xl drop-shadow-lg text-foreground">{cert.icon}</span>
                  ) : (
                    <cert.icon className="text-3xl text-blue-600 dark:text-blue-400 drop-shadow-lg" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold" data-testid={`certification-title-${index}`}>
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className={`px-3 py-1 bg-${cert.statusColor}/20 text-${cert.statusColor} rounded-full text-xs`}>
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center" data-testid="achievements-title">
            Notable Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glassmorphism p-6 rounded-xl card-hover" data-testid={`achievement-${index}`}>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 mr-4 animate-float">
                    <achievement.icon className={`text-3xl ${achievement.color} drop-shadow-lg`} />
                  </div>
                  <div>
                    <h4 className="font-semibold" data-testid={`achievement-title-${index}`}>
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
