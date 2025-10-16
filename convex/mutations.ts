import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { v4 as uuidv4 } from "uuid";

export const createProduct = mutation({
  args: {
    product_id: v.string(),
    name: v.string(),
    description: v.string(),
    price: v.number(),
    stock_quantity: v.number(),
    category_id: v.id("categories"),
    image_url: v.id("images"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("products", { ...args, product_id: uuidv4() });
  },
});

export const uploadImage = mutation({
  handler: async (ctx, _) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const addCategories = mutation({
  args: {
    category_id: v.string(),
    name: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("categories", {
      ...args,
      category_id: uuidv4(),
    });
  },
});
