import { z } from "zod";

export const userSignupSchema = z.object({
  fullname : z.string().min(1, "Fullname is required"),
  email : z.string().email("invalid email address"),
  password : z.string().min(8,"password must be at least 8 characters long"),
    contact : z.string().min(10,"contact must be at least 10 characters long"),
});

export type SignupInputState = z.infer<typeof   userSignupSchema>;

export const userLoginSchema = z.object({
  email : z.string().email("invalid email address"),
  password : z.string().min(8,"password must be at least 8 characters long"),
});

export type LoginInputState = z.infer<typeof   userLoginSchema>;