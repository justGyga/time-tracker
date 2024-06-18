import { generateApiKey } from "generate-api-key";

type RandomOptions = { prefix?: string; batch?: number };
export const makeRandomName = (options?: RandomOptions) => generateApiKey({ method: "base62", prefix: options?.prefix, batch: options?.batch });

export const makeUUID = () => generateApiKey({ method: "uuidv4" }).toString();

export const makeSimpleCode = () => generateApiKey({ method: "string", length: 4, pool: "0123456789" }).toString();
