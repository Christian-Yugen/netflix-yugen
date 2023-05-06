import { PrismaClient } from '@prisma/client';
import  { MongoClent } from 'mongodb';

declare global {
    namespace globalThis {
        var prismadb: PrismaClient
    }
}