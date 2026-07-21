import { Module } from "@nestjs/common";
import { InstallerController } from "./installer.controller";

@Module({ controllers: [InstallerController] })
export class InstallerModule {}
