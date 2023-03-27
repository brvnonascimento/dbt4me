import { z } from 'zod';

export const UserEmail = z.string().email().brand('UserEmail');
export type UserEmail = Readonly<z.infer<typeof UserEmail>>;
