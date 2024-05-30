import { z } from 'zod';
import { StepperFormSchema } from './schemas';

export type StepperFormData = z.infer<typeof StepperFormSchema>;
