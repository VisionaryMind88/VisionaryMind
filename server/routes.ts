import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ContactSubmission, contactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = contactSubmissionSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Contact form submitted successfully",
        id: submission.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      console.error("Error processing contact form:", error);
      res.status(500).json({
        message: "Failed to process contact form submission"
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        message: "Failed to fetch contact submissions"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
