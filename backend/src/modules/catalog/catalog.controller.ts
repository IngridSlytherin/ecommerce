import { Controller, Get, Param, Query } from "@nestjs/common";
import { demoCategories, demoProducts } from "../../database/demo.seed";

@Controller("catalog")
export class CatalogController {
  @Get("categories")
  categories() {
    return demoCategories;
  }

  @Get("products")
  products(@Query("category") category?: string) {
    return category ? demoProducts.filter((product) => product.category === category) : demoProducts;
  }

  @Get("products/:id")
  product(@Param("id") id: string) {
    return demoProducts.find((product) => product.id === id || product.sku === id);
  }
}
