import { CommonRedisOptions, Redis } from "ioredis";
import { printInfo } from "../../common/functions/print";

export let redis: Redis;

export const runRedisDriver = async (): Promise<void> => {
    const config: CommonRedisOptions = {
        username: process.env.RD_USER || "default",
        db: Number(process.env.RD_DB || 0),
        lazyConnect: true
    };
    redis = new Redis(Number(process.env.RD_PORT), String(process.env.RD_HOST), config);
    await redis.connect();
    printInfo("[Redis] connection has been verified");
};
