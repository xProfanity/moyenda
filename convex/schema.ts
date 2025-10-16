import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    product_id: v.string(),
    name: v.string(),
    description: v.string(),
    price: v.number(),
    stock_quantity: v.number(),
    category_id: v.id("categories"),
    image_url: v.id("images"),
  }).index("by_product", ["product_id"]),
  categories: defineTable({
    category_id: v.string(),
    name: v.string(),
    description: v.string(),
  }),
  orders: defineTable({
    order_id: v.string(),
    customer_id: v.id("customers"),
    total_amount: v.number(),
    status: v.union(
      v.literal("pending"),
      v.literal("paid"),
      v.literal("shipped"),
      v.literal("delivered"),
      v.literal("cancelled")
    ),
    shipping_address: v.string(),
    shipping_method: v.id("shipping_methods"),
    payment_method: v.id("payment_methods"),
  }).index("by_customer", ["customer_id"]),
  order_items: defineTable({
    order_item_id: v.string(),
    order_id: v.id("orders"),
    product_id: v.id("products"),
    quantity: v.number(),
    unit_price: v.float64(),
  }),
  payments: defineTable({
    payment_id: v.string(),
    order_id: v.id("orders"),
    amount: v.float64(),
    payment_date: v.string(),
    payment_status: v.union(
      v.literal("pending"),
      v.literal("completed"),
      v.literal("failed")
    ),
    transaction_id: v.string(),
  }),
});
