import { z } from 'zod';

export const UserName = z.string().min(1).brand('UserName');
export type UserName = Readonly<z.infer<typeof UserName>>;
