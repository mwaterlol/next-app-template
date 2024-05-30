'use client';
import { Button, Group, Paper, Stack, Stepper, rem } from '@mantine/core';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { StepperFormData } from './types';
import { StepperFormSchema } from './schemas';
import { FormProvider, useForm } from 'react-hook-form';
import { Background, Parameters, Product, Result } from './Steps';

export const StepperForm = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const form = useForm<StepperFormData>({ resolver: zodResolver(StepperFormSchema) });
  console.log(form.getValues());
  return (
    <Paper
      withBorder
      shadow="md"
      w="90%"
      maw={1100}
      style={(theme) => ({
        background: theme.colors.gray[0],
        borderRadius: rem(16),
      })}
      p="md"
      pb="xl"
    >
      <FormProvider {...form}>
        <form>
          <Stepper active={active} onStepClick={setActive} mt="xl">
            <Stepper.Step label="Шаг 1" description="Загрузка товара">
              <Product />
            </Stepper.Step>
            <Stepper.Step label="Шаг 2" description="Выбор фона">
              <Background />
            </Stepper.Step>
            <Stepper.Step label="Шаг 3" description="Доп. настройки">
              <Parameters />
            </Stepper.Step>

            <Stepper.Completed>
              <Result />
            </Stepper.Completed>
          </Stepper>
          <Group justify="space-between" mt="xl">
            <Button variant="outline" onClick={prevStep}>
              Назад
            </Button>
            <Button onClick={nextStep}>Следующий шаг</Button>
          </Group>
        </form>
      </FormProvider>
    </Paper>
  );
};
