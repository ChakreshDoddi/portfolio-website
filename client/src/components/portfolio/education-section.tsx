import { GraduationCap, Cpu } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      icon: GraduationCap,
      degree: "Master of Science",
      field: "Information Systems",
      school: "Saint Louis University",
      graduation: "May 2025",
      gpa: "3.94 / 4.0",
      color: "text-primary",
      focus: ["Software Engineering", "Cloud Computing", "Full Stack Development"]
    },
    {
      icon: Cpu,
      degree: "Bachelor of Technology",
      field: "Electrical & Electronics Engineering",
      school: "Kakatiya University",
      graduation: "May 2021",
      gpa: "8.7 / 10.0",
      color: "text-secondary",
      activities: "Member of IETE & TASK, robotics competitions, tech fests"
    }
  ];

  return (
    <section className="py-20" data-testid="education-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="education-title">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl card-hover" data-testid={`education-card-${index}`}>
              <div className="flex items-center mb-6">
                <edu.icon className={`text-3xl ${edu.color} mr-4`} />
                <div>
                  <h3 className="text-xl font-semibold" data-testid={`education-degree-${index}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`education-field-${index}`}>
                    {edu.field}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium" data-testid={`education-school-${index}`}>
                    {edu.school}
                  </span>
                  <span className="text-sm text-muted-foreground" data-testid={`education-graduation-${index}`}>
                    {edu.graduation}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>GPA</span>
                  <span className={`font-bold ${edu.color} text-lg`} data-testid={`education-gpa-${index}`}>
                    {edu.gpa}
                  </span>
                </div>
                
                {edu.focus && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Focus Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.focus.map((area, areaIndex) => (
                        <span 
                          key={areaIndex}
                          className={`px-3 py-1 rounded-full text-xs ${
                            areaIndex % 3 === 0 ? 'bg-primary/20 text-primary' :
                            areaIndex % 3 === 1 ? 'bg-secondary/20 text-secondary' :
                            'bg-accent/20 text-accent'
                          }`}
                          data-testid={`education-focus-${index}-${areaIndex}`}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {edu.activities && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Activities:</p>
                    <div className="text-sm text-muted-foreground" data-testid={`education-activities-${index}`}>
                      {edu.activities}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
