import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

const hasRedis = Boolean(url && token);

const redis = hasRedis ? new Redis({ url: url!, token: token! }) : null;

/** 5 requests / 10s per IP when Upstash is configured; otherwise no limit (dev without Redis). */
export const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '10 s'),
    })
  : {
      limit: async () => ({ success: true, limit: 5, remaining: 5, reset: 0 }),
    };
