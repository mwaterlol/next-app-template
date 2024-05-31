'use client';
import { Paper, Stepper as MantineStepper, rem } from '@mantine/core';
import { StepperProps } from './types';
import { usePathname } from 'next/navigation';
import { trim } from 'radash';

const steps = ['/', '/background', '/parameters', '/results'];

export const Stepper = ({ children }: StepperProps) => {
  const pathname = usePathname();

  const activeIndex = steps.findIndex((step) => trim(step, '/') === trim(pathname, '/'));

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
      <MantineStepper active={activeIndex} mt="xl">
        <MantineStepper.Step label="Шаг 1" description="Загрузка товара" />
        <MantineStepper.Step label="Шаг 2" description="Выбор фона" />
        <MantineStepper.Step label="Шаг 3" description="Доп. настройки" />
      </MantineStepper>
      {children}
    </Paper>
  );
};
