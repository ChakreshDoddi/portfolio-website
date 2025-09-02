import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      // Log the contact form submission (in a real app, you'd send an email or store in DB)
      console.log("Contact form submission:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

      res.json({ 
        message: "Message sent successfully! Thank you for reaching out." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      // In a real implementation, you would serve an actual PDF file
      // For now, we'll create a simple text file with resume content
      const resumeContent = `
CHAKRESH DODDI
Software Engineer
Email: chakreshdoddi2404@gmail.com
Phone: +1 (314) 575-5820
LinkedIn: www.linkedin.com/in/chakresh-doddi
GitHub: https://github.com/ChakreshDoddi

PROFESSIONAL SUMMARY
Full Stack Java Developer with 4+ years of experience delivering cloud-native, secure, and scalable applications across enterprise and product environments.

TECHNICAL SKILLS
Languages: Java (up to Java 17), SQL, HTML, CSS, JavaScript
Frameworks: Spring Boot, Spring Cloud, Microservices, JPA, Hibernate, REST APIs, React.js, Angular
Cloud Platforms: AWS (EC2, S3, RDS, IAM, EKS, SNS, MSK), Azure, OpenShift
DevOps & Tools: Git, GitHub, Jenkins, Maven, Docker, Kubernetes, CI/CD Automation

PROFESSIONAL EXPERIENCE

Backend Developer | Saint Louis University – St. Louis, MO | Jul 2024 – Apr 2025
• Designed Doctor Burnout Prevention Platform serving 5K+ healthcare providers
• Deployed secure services on Azure Kubernetes Service achieving 99.9% uptime
• Implemented OAuth2/JWT authentication for HIPAA-compliant access control

Software Engineering Intern | Saint Louis University – St. Louis, MO | Jan 2024 – Jun 2024
• Built cloud-native food delivery platform reducing API latency by 20%
• Deployed REST APIs on AWS EC2/S3 supporting 1K+ daily transactions
• Containerized services with Docker, reducing release cycles from 2 weeks to 3 days

Associate Software Engineer | Accenture Solutions Pvt. Ltd. – Hyderabad, India | Jun 2021 – Jun 2023
• Developed job tracking system for 10K+ employees with 90%+ test coverage
• Automated CI/CD pipelines reducing deployment effort by 50%
• Mentored 5+ junior developers improving team productivity

EDUCATION
Master of Science in Information Systems | Saint Louis University | May 2025 | GPA: 3.94/4.0
Bachelor of Technology in Electrical & Electronics Engineering | Kakatiya University | May 2021 | GPA: 8.7/10.0

CERTIFICATIONS
• AWS Certified Developer – Associate (In Progress)
• Oracle Certified Professional: Java SE 17 (Planned)
• Kubernetes Certified Administrator – CKA (Planned)
      `;

      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Content-Disposition', 'attachment; filename="Chakresh_Doddi_Resume.txt"');
      res.send(resumeContent);
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        message: "Error downloading resume. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
