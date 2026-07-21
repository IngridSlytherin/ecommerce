import { Body, Controller, Post } from "@nestjs/common";
import { IsIn, IsNumber, IsString } from "class-validator";

class SandboxPaymentDto {
  @IsIn(["stripe", "mercado-pago", "paypal"])
  provider!: string;

  @IsNumber()
  amount!: number;

  @IsString()
  orderId!: string;
}

@Controller("payments")
export class PaymentsController {
  @Post("sandbox/authorize")
  authorize(@Body() dto: SandboxPaymentDto) {
    return {
      provider: dto.provider,
      orderId: dto.orderId,
      amount: dto.amount,
      status: "approved",
      transactionId: `sandbox_${dto.provider}_${Date.now()}`,
      captured: false
    };
  }
}
