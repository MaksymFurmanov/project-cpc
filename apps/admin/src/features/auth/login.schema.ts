import z from 'zod';
import validator from "validator";

const loginSchema = z
    .object({
        email: z
            .string()
            .trim()
            .refine(validator.isEmail, "Invalid email"),
        password: z
            .string()
            .trim()
    });

export type LoginFormInput = z.infer<typeof loginSchema>;

export default loginSchema;