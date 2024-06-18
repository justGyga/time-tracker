import { COLORS } from "../internal/common/enums/colors";
import { print } from "../internal/common/functions/print";
import { runRedisDriver } from "../internal/db/redis/driver";
import { runSQLDriver } from "../internal/db/sql/driver";
import { runHttpServer } from "./http";

void (async function () {
    await runSQLDriver();
    await runRedisDriver();
    await runHttpServer();
    print("System is fully bootstrapped!", COLORS.MAGENTA);
})().catch((ex) => {
    console.error(ex.message);
    process.exit(1);
});
