import { Controller, Get } from "@nestjs/common";
import { demoCustomers, demoOrders, demoProducts } from "../../database/demo.seed";

@Controller("analytics")
export class AnalyticsController {
  @Get("dashboard")
  dashboard() {
    const revenue = demoOrders.reduce((sum, order) => sum + order.total, 0);
    return {
      revenue,
      orders: demoOrders.length,
      conversion: 3.8,
      averageTicket: revenue / demoOrders.length,
      customers: demoCustomers.length,
      lowStock: demoProducts.filter((product) => product.stock <= 5).length,
      reports: ["excel", "pdf", "csv"]
    };
  }
}
