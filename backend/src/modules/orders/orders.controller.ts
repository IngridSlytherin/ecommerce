import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { IsArray, IsEmail, IsNumber, IsString } from "class-validator";
import { demoOrders } from "../../database/demo.seed";

class CreateSandboxOrderDto {
  @IsEmail()
  email!: string;

  @IsString()
  customerName!: string;

  @IsArray()
  items!: unknown[];

  @IsNumber()
  total!: number;
}

@Controller("orders")
export class OrdersController {
  private readonly orders = [...demoOrders];

  @Get()
  list() {
    return this.orders;
  }

  @Post("sandbox")
  createSandbox(@Body() dto: CreateSandboxOrderDto) {
    const order = {
      id: `PED-${String(this.orders.length + 1).padStart(5, "0")}`,
      customerId: dto.email,
      customerName: dto.customerName,
      total: dto.total,
      status: "Pago",
      sandbox: true,
      items: dto.items,
      createdAt: new Date().toISOString()
    };
    this.orders.unshift(order);
    return order;
  }

  @Patch(":id/status/:status")
  updateStatus(@Param("id") id: string, @Param("status") status: string) {
    const order = this.orders.find((item) => item.id === id);
    if (order) {
      order.status = status;
    }
    return order;
  }
}
