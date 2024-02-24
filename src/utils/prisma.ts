import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const todoRepository = prisma.todo;
