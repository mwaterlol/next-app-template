'use client';

import { Stack, Text } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dropzone } from '@/components/Dropzone';
import { ProductFormData, ProductFormProps } from './types';
import { ProductFormSchema } from './schemas';

export const ProductForm = ({ onSubmit, actions }: ProductFormProps) => {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      productPicture: undefined,
    },
  });
  const { handleSubmit } = form;

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack my="lg" p="xl" align="center">
          <Dropzone<ProductFormData> name="productPicture" />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper pharetra est vitae
            tincidunt. Aliquam commodo, tellus eget vehicula aliquam, neque augue laoreet tellus,
            quis aliquam lectus nibh dignissim quam.
          </Text>
        </Stack>
        {actions}
      </form>
    </FormProvider>
  );
};
