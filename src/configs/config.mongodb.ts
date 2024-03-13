// Level 0
// export const config = {
//     app: {
//         port: 3000
//     },
//     db: {
//         host: "localhost",
//         port: 27017,
//         name: "db"
//     }
// }

// Level 1
import dotenv from "dotenv";
dotenv.config();

type AppConfig = {
    port: string | undefined;
};

type DbConfig = {
    host: string | undefined;
    port: string | undefined;
    name: string | undefined;
};

type Config = {
    app: AppConfig;
    db: DbConfig;
};

const dev_config: Config = {
    app: {
        port: process.env.DEV_APP_PORT
    },
    db: {
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        name: process.env.DEV_DB_NAME
    }
}

const production_config: Config = {
    app: {
        port: process.env.PRO_APP_PORT
    },
    db: {
        host: process.env.PRO_DB_HOST,
        port: process.env.PRO_DB_PORT,
        name: process.env.PRO_DB_NAME
    }
}

const configs: Record<string, Config> = { dev: dev_config, pro: production_config };
const env = process.env.NODE_ENV || "dev";

export const config = configs[env];