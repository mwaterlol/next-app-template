import { z } from 'zod';

export const ProductFormSchema = z
  .object({
    productPicture: z.custom<File>(),
  })
  .refine((data) => data.productPicture[0]?.size > 0, {
    path: ['productPicture'],
    message: 'Необходимо загрузить фотографию товара',
  });
