import NextAuth from 'next-auth';
import Credentials from 'nex-auth/providers/credentials';
import { compare } from 'bcrypt';

import prismadb from '@/lib/prismadb';

export default NextAuth ({
    providers: [
        Credentials({
            id: 'credentials',
            name: Credentials,
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'password',
                    type: 'password',
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email e senha obrigatorios');
                }

                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!User || !User.hashedPassword) {
                    throw new Error('Email não cadastrado');
                }

                const isCorrectPassword = await compare(
                    credentials.password,
                    user.hashePassword
                );

                if (!isCorrectPassword) {
                    throw new Error()
                }
            }
        })
    ]
})