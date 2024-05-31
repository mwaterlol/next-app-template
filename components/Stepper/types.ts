import { z } from 'zod';
import { StepperFormSchema } from './schemas';
import { ReactNode } from 'react';

export type StepperFormData = z.infer<typeof StepperFormSchema>;

export type StepperProps = {
  children: ReactNode;
};
