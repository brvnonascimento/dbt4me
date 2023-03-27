import { z } from 'zod';

export const CreatedAt = z.date();
export type CreatedAt = Readonly<z.infer<typeof CreatedAt>>;

export const UpdatedAt = z.date();
export type UpdatedAt = Readonly<z.infer<typeof UpdatedAt>>;
