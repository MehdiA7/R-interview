import { z } from "zod";

export const newUserSchema = z.object({
    type: z.enum(["Merchant", "Agent"]),
    firstname: z.string().min(3, "The firstname is wrong !"),
    country: z.string().min(2, "Country is needed !"),
    email: z.string().min(4, "Valid Email is required !"),
    industry: z.enum(["Finance", "Medical", "Auto", "Energy"]),
    phone: z.string().min(5, "Phone number is required"),
    password: z.string().min(8, "Your password need 8 character !"),
    policy: z.boolean()
})

export type NewUser = z.infer<typeof newUserSchema>;
