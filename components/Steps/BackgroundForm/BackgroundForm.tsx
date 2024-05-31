'use client';
import {
  Box,
  Button,
  Flex,
  rem,
  Stack,
  Tabs,
  Text,
  Textarea,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { BookDashed, CircleHelp, Scan } from 'lucide-react';
import { useState } from 'react';
import { TabsVariants } from './types';
import { templatesList } from './utils';
import { useFormContext } from 'react-hook-form';
import { StepperFormData } from '../../Stepper/types';
import { Dropzone } from '@/components/Dropzone';

export const BackgroundForm = () => {
  const { setValue, watch, control, register } = useFormContext<StepperFormData>();
  const styleTemplate = watch('styleTemplate');
  const [activeTab, setActiveTab] = useState<TabsVariants | null>('template');
  return (
    <Stack>
      <Tabs value={activeTab} onChange={(value) => setActiveTab(value as TabsVariants)}>
        <Tabs.List>
          <Tabs.Tab
            value="template"
            leftSection={<BookDashed size={20} />}
            rightSection={
              <Tooltip label="В качестве фона вы можете выбрать один из шаблонов">
                <CircleHelp size={16} />
              </Tooltip>
            }
          >
            Шаблоны
          </Tabs.Tab>
          <Tabs.Tab
            value="custom"
            leftSection={<Scan size={20} />}
            rightSection={
              <Tooltip label="Можно самому загрузить фон или описать его">
                <CircleHelp size={16} />
              </Tooltip>
            }
          >
            Свой фон
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      {activeTab === 'template' && (
        <Flex gap="sm" wrap="wrap" justify="center">
          {templatesList.map((template) => (
            <Button
              key={template.name}
              h="fit-content"
              p={0}
              variant="white"
              bg="transparent"
              color="black"
              onClick={() => setValue('styleTemplate', template.name)}
            >
              <Flex direction="column" align="center">
                <Box
                  w={rem(100)}
                  mih={rem(100)}
                  bg="dark.0"
                  style={{
                    borderRadius: rem(16),
                    border: styleTemplate === template.name ? `1px solid blue` : undefined,
                  }}
                />
                <Text>{template.name}</Text>
              </Flex>
            </Button>
          ))}
        </Flex>
      )}
      {activeTab === 'custom' && (
        <Flex direction="column" align="center" gap="md">
          <Textarea
            rows={3}
            label="Описание фона"
            {...register('backgroundDescription')}
            style={{ flexGrow: 1, width: '100%', maxWidth: 540 }}
            radius={rem(12)}
          />
          <Dropzone name="backgroundPicture" />
        </Flex>
      )}
    </Stack>
  );
};
