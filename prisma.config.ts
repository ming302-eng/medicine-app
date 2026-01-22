import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "src/db/prisma/schema.prisma",
  // url은 스키마 파일이 아니라 prisma.config.ts에서 관리(Prisma 7.x)
  datasource: {
    url: process.env.DATABASE_URL
  },
  migrations: {
    path: "src/db/migrations"
  }
});

