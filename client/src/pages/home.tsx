import { useEffect } from "react";
import Navigation from "@/components/portfolio/navigation";
import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import SkillsSection from "@/components/portfolio/skills-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import CertificationsSection from "@/components/portfolio/certifications-section";
import EducationSection from "@/components/portfolio/education-section";
import ContactSection from "@/components/portfolio/contact-section";
import Footer from "@/components/portfolio/footer";
import FloatingContact from "@/components/portfolio/floating-contact";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href?.includes("#")) {
        e.preventDefault();
        const id = target.href.split("#")[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <title>Chakresh Doddi - Full Stack Java Developer</title>
      <meta
        name="description"
        content="Full Stack Java Developer with 4+ years of experience in cloud-native applications, microservices, and enterprise solutions."
      />
      <meta property="og:title" content="Chakresh Doddi - Full Stack Java Developer" />
      <meta
        property="og:description"
        content="Experienced Java developer specializing in Spring Boot, AWS, and scalable microservices architecture."
      />
      <meta property="og:type" content="website" />

      <div className="floating-elements"></div>
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </div>
  );
}
