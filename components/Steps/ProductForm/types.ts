import { z } from 'zod';
import { ProductFormSchema } from './schemas';
import { SubmitHandler } from 'react-hook-form';
import { ReactNode } from 'react';

export type ProductFormData = z.infer<typeof ProductFormSchema>;

export type ProductFormProps = {
  onSubmit: SubmitHandler<ProductFormData>;
  actions: ReactNode;
};
