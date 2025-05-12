import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  privacyConsent: boolean("privacy_consent").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const contactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  company: true,
  name: true,
  email: true,
  phone: true,
  message: true,
  privacyConsent: true,
});

export type InsertContactSubmission = z.infer<typeof contactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
