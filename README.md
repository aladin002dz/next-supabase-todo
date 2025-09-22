# Supabase CRUD

Step by step guide to create a CRUD app with Supabase and Next.js

1. Create a new Next.js app

```bash
npx create-next-app@latest --yes .
```

2. Install Shadcn UI components

```bash
npx shadcn@latest init
npx shadcn@latest add #press a for all components then enter
```

3. Install Prisma

```bash
npm install @prisma/client
npm install prisma --save-dev
```

Create a prisma.ts file in the root of the project and add the following code:

```ts
import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
```