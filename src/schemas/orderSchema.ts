import { z } from "zod";

export const orderSchema = z.object({
  email: z.string().email(),
  productId: z.string().regex(/^[0-9a-fA-F]{24}$/), // Validates MongoDB ObjectId
  price: z.number(),
  quantity: z.number(),
});
