import { z } from "zod";

export const User = z.object({
  name: z.string().min(3),
});
