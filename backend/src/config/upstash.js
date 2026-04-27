import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

let ratelimit;

try {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error("Upstash env variables not set");
  }

  ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "40s"),
  });
} catch (err) {
  console.warn("[Upstash] Not configured — using no-op rate limiter for development.");

  // lightweight no-op fallback that matches the interface used in middleware
  ratelimit = {
    async limit() {
      return { success: true };
    },
  };
}

export default ratelimit;
