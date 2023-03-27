import { CreatedAt, UpdatedAt } from '@core/shared/Date';
import { z } from 'zod';
import { UserName } from '../UserName';
import { UserEmail } from '../UserEmail';

export const PsychologistId = z.string().uuid().brand('PsychologistId');
export type PsychologistId = Readonly<z.infer<typeof PsychologistId>>;

export const Psychologist = z
	.object({
		id: PsychologistId,
		name: UserName,
		email: UserEmail,
		role: z.literal('Psychologist'),
		createdAt: CreatedAt,
		updatedAt: UpdatedAt
	})
	.brand('Athlete');

export type Athlete = Readonly<z.infer<typeof Psychologist>>;
