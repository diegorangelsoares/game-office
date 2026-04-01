import { z } from "zod";

export const RoleSchema = z.enum(["DEV", "PM", "DESIGN", "QA", "OUTRO"]);
export type UserRole = z.infer<typeof RoleSchema>;

export const ProjectSpotSchema = z.object({
  id: z.string(),
  roomId: z.string(),
  name: z.string(),
  description: z.string(),
  thumbUrl: z.string().url().optional(),
  docsUrl: z.string().url(),
  appUrl: z.string().url(),
  x: z.number(),
  y: z.number(),
  w: z.number(),
  h: z.number()
});
export type ProjectSpot = z.infer<typeof ProjectSpotSchema>;

export type PlayerState = {
  id: string;
  name: string;
  x: number;
  y: number;
  role: UserRole;
};
