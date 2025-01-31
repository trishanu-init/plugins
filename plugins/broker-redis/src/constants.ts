import { CreateServerDockerComposeDevParams, CreateServerDockerComposeParams } from "@amplication/code-gen-types";
import { join } from "path";

export const staticsPath = join(__dirname, "static");

export const templatesPath = join(__dirname, "templates");

export const dependencies = {
    dependencies: {
        "redis": "3.1.2",
        "@nestjs/microservices": "8.2.3",
        "rxjs": "^7.8.1"
    }
}

export const updateDockerComposeProperties: CreateServerDockerComposeParams["updateProperties"] = [{
    services: {
        server: {
            depends_on: ["redis_broker"]
        },
        redis_broker: {
            container_name: "${REDIS_BROKER_HOST}",
            image: "redis:6",
            ports: ["${REDIS_BROKER_PORT}:6379"],
            volumes: ["redis_broker:/redis-broker-data"]
        }
    },
    volumes: {
        redis_broker: {
            driver: "local"
        }
    }
}]

export const updateDockerComposeDevProperties: CreateServerDockerComposeDevParams["updateProperties"] = [{
    services: {
        redis_broker: {
            container_name: "${REDIS_BROKER_HOST}",
            image: "redis:6",
            ports: ["${REDIS_BROKER_PORT}:6379"],
            volumes: ["redis_broker:/redis-broker-data"]
        }
    },
    volumes: {
        redis_broker: {
            driver: "local"
        }
    }
}]
