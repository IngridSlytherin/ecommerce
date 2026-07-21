import { Body, Controller, Get, Post } from "@nestjs/common";
import { IsArray, IsOptional, IsString } from "class-validator";

class InstallStoreDto {
  @IsString()
  storeName!: string;

  @IsString()
  domain!: string;

  @IsString()
  theme!: string;

  @IsArray()
  payments!: string[];

  @IsOptional()
  @IsString()
  logoUrl?: string;
}

@Controller("installer")
export class InstallerController {
  private installed = false;
  private config: InstallStoreDto | null = null;

  @Get("status")
  status() {
    return { installed: this.installed, config: this.config };
  }

  @Post("complete")
  complete(@Body() dto: InstallStoreDto) {
    this.installed = true;
    this.config = dto;
    return {
      installed: true,
      message: "Loja pronta para uso",
      demoData: { products: 20, categories: 5, customers: 10, orders: 30 }
    };
  }
}
