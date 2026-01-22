type EnvKey =
  | "DATABASE_URL"
  | "NEXTAUTH_SECRET"
  | "NEXTAUTH_URL"
  | "EMAIL_FROM"
  | "RESEND_API_KEY"
  | "MFDS_API_KEY"
  | "SENTRY_DSN"
  | "UPSTASH_REDIS_REST_URL"
  | "UPSTASH_REDIS_REST_TOKEN"
  | "CRON_SECRET";

function readEnv(key: EnvKey) {
  const v = process.env[key];
  return v && v.trim().length > 0 ? v : undefined;
}

/**
 * 서버에서만 사용하세요.
 * - 라우트 핸들러/서비스 레이어에서 필요한 env를 강제하기 위한 유틸
 */
export const env = {
  DATABASE_URL: readEnv("DATABASE_URL"),
  NEXTAUTH_SECRET: readEnv("NEXTAUTH_SECRET"),
  NEXTAUTH_URL: readEnv("NEXTAUTH_URL"),
  EMAIL_FROM: readEnv("EMAIL_FROM"),
  RESEND_API_KEY: readEnv("RESEND_API_KEY"),
  MFDS_API_KEY: readEnv("MFDS_API_KEY"),
  SENTRY_DSN: readEnv("SENTRY_DSN"),
  UPSTASH_REDIS_REST_URL: readEnv("UPSTASH_REDIS_REST_URL"),
  UPSTASH_REDIS_REST_TOKEN: readEnv("UPSTASH_REDIS_REST_TOKEN"),
  CRON_SECRET: readEnv("CRON_SECRET")
} as const;

export function requireEnv<K extends keyof typeof env>(key: K): NonNullable<(typeof env)[K]> {
  const v = env[key];
  if (!v) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return v as NonNullable<(typeof env)[K]>;
}

