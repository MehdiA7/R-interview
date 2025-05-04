import { z } from "zod";

export const newUserSchema = z.object({
    type: z.enum(["Merchant", "Agent"]),
    firstname: z.string().min(3, "The firstname is wrong !"),
    country: z.enum(["Belgium", "France", "Other"]),
    email: z.string().email("Valid Email is required !"),
    industry: z.enum(["Finance", "Medical", "Auto", "Energy"]),
    phone: z.string().min(5, "Phone number is required"),
    password: z.string().min(8, "Your password need 8 character !"),
    policy: z.literal(true)
})

export type NewUser = z.infer<typeof newUserSchema>;

export const loginSchema = z.object({
    email: z.string().email("Valid Email is required !"),
    password: z.string().min(8)
});

export type LoginCred = z.infer<typeof loginSchema>;

