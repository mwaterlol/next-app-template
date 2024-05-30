'use client';
import { useFormContext } from 'react-hook-form';
import { StepperFormData } from '../../types';
import { Flex, rem, Slider, Stack, Text, Tooltip } from '@mantine/core';
import { CircleHelp } from 'lucide-react';

export const Parameters = () => {
  const { watch, register, control, setValue } = useFormContext<StepperFormData>();
  return (
    <Stack mt="xl">
      <Flex direction="column" gap="xs">
        <Flex gap="xs" align="center">
          <Text inline>Label 1</Text>
          <Tooltip label="Tooltip 1">
            <CircleHelp size={16} />
          </Tooltip>
        </Flex>
        <Slider max={1} step={0.01} />
      </Flex>
      <Flex direction="column" gap="xs">
        <Flex gap="xs" align="center">
          <Text inline>Label 1</Text>
          <Tooltip label="Tooltip 1">
            <CircleHelp size={16} />
          </Tooltip>
        </Flex>
        <Slider max={1} step={0.01} />
      </Flex>
      <Flex direction="column" gap="xs">
        <Flex gap="xs" align="center">
          <Text inline>Label 1</Text>
          <Tooltip label="Tooltip 1">
            <CircleHelp size={16} />
          </Tooltip>
        </Flex>
        <Slider max={1} step={0.01} />
      </Flex>
    </Stack>
  );
};
