import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
  @Get()
  check() {
    return {
      status: "ok",
      services: ["api", "postgres-ready", "redis-ready", "minio-ready"],
      timestamp: new Date().toISOString()
    };
  }
}
