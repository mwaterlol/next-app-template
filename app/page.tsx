'use client';
import { Actions, ProductForm, Stepper } from '@/components';
import { ProductFormData } from '@/components/Steps/ProductForm/types';
import { Button, Flex, Group } from '@mantine/core';

export default function HomePage() {
  const onSubmit = (data: ProductFormData) => {
    console.log(data);
  };
  const getBack = () => {};
  return (
    <Stepper
      children={<ProductForm onSubmit={onSubmit} actions={<Actions backButtonDisabled />} />}
    />
  );
}
