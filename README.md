# Supabase CRUD

Step by step guide to create a CRUD app with Supabase and Next.js
This code is made by following the tutorial from [https://www.youtube.com/watch?v=kbW65T75aUo](https://www.youtube.com/watch?v=kbW65T75aUo)

## Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcn&logoColor=white)

</div>

1. Create a new Next.js app

```bash
npx create-next-app@latest --yes . # The "." is create the app in the current directory.
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
4. Create a Supabase project

and get the project Connection URLs.


5. Prisma init

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
6. Prisma migration

add `prisma/migrations` to `.gitignore`, then run the following command:

```bash
npx prisma migrate dev --name init
```
or you can simply run `npx prisma db push` to push the schema to the database.

```bash
npx prisma db push
```

