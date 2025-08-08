import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'
import 'dotenv/config'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default NuxtAuthHandler({
    // A secret string you define, to ensure correct encryption
    // @ts-expect-error: Adapter type mismatch workaround
    adapter: PrismaAdapter(prisma),
    secret: process.env.NUXT_SECRET_PASSWORD,
    providers: [
        // @ts-expect-error Use .default here for it to work during SSR.
        GithubProvider.default({
            clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
            clientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET
        })
    ],
    session: {
        strategy: 'database'
    },
})
