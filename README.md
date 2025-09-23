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

4. Prisma init

```bash
npx prisma init
npx prisma generate
```

update the prisma.schema file with the following code:
a code from Supabase
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```
then add a simple model

```prisma
model Todo {
  id        String   @id @default(uuid())
  title     String
  description String
  completed Boolean  @default(false)
}
```
5. Prisma migration

add `prisma/migrations` to `.gitignore`, then run the following command:

```bash
npx prisma migrate dev --name init
```