import { z } from 'zod';

const createUserSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must have at least 8 characters'),
  }),
});

//TODO: need update more fields for this site

//* change some system
const updateUserProfileSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    password: z.string().min(8, 'Password must have at least 8 characters'),
    role: z.enum(['ADMIN', 'USER', 'OWNER']),
    gender: z.enum(['MALE', 'FEMALE', 'OTHERS']).optional(),
    image: z.string().optional(),
    dob: z.string().optional(),
  }),
});

const updateLocationZodSchema = z.object({
  body: z.object({
    longitude: z.string({ required_error: 'Longitude is required' }),
    latitude: z.string({ required_error: 'Latitude is required' }),
  }),
});

export const UserValidation = {
  createUserSchema,
  updateLocationZodSchema,
  updateUserProfileSchema,
};
