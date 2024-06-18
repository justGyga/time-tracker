import { runRedisDriver } from "../internal/db/redis/driver";
import { runSQLDriver } from "../internal/db/sql/driver";
import { runHttpServer } from "./http";

void (async function () {
    await runSQLDriver();
    await runRedisDriver();
    await runHttpServer();
    console.info("System is fully bootstrapped!");
})().catch((ex) => {
    console.error(ex.message);
    process.exit(1);
});
