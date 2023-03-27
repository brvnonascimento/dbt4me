import lucia from 'lucia-auth';
import prisma from '@lucia-auth/adapter-prisma';

import { dev } from '$app/environment';
import { client } from '$lib/server/shared/infra/prisma';
import { z } from 'zod';

export const createUserInputSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8)
});

export const auth = lucia({
	adapter: prisma(client),
	env: dev ? 'DEV' : 'PROD'
});
