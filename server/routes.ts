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
      const resumePath = path.join(process.cwd(), "attached_assets", "Chakri_Resume_1756850710172.pdf");
      
      // Check if file exists
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({ 
          message: "Resume file not found" 
        });
      }

      // Set headers for PDF download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Chakresh_Doddi_Resume.pdf"');
      
      // Send the PDF file
      res.sendFile(resumePath);
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
