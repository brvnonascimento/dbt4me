import { z } from 'zod';

export const User = z.object({
	id: z.string().uuid(),
	name: z.string().min(1),
	email: z.string().email(),
	password: z.string().min(8),
	createdAt: z.date(),
	updatedAt: z.date()
});
