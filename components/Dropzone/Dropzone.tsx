import { Group, rem, Button, Image, Text } from '@mantine/core';
import { Upload, X, ImageIcon } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';
import { DropzoneProps } from './types';
import { useState, useEffect } from 'react';
import { StepperFormData } from '../StepperForm/types';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';

export const Dropzone = ({ name }: DropzoneProps) => {
  const { watch, register, control, setValue } = useFormContext<StepperFormData>();
  const uploadedFile = watch(name);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    //@ts-ignore
    if (uploadedFile && uploadedFile?.[0]) {
      //@ts-ignore
      const url = URL.createObjectURL(uploadedFile[0]);
      setImageUrl(url);

      return () => URL.revokeObjectURL(url);
    } else {
      setImageUrl(null);
    }
  }, [uploadedFile]);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <MantineDropzone
            onDrop={(files) => field.onChange(files)}
            onReject={(files) => console.log('rejected files', files)}
            style={(theme) => ({
              border: `1px dashed ${theme.colors.gray[4]}`,
              borderRadius: rem(16),
              maxWidth: 600,
              input: {
                background: 'red',
              },
            })}
            p="md"
          >
            <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
              <MantineDropzone.Accept>
                <Upload
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: 'var(--mantine-color-blue-6)',
                  }}
                  strokeWidth={1.5}
                />
              </MantineDropzone.Accept>
              <MantineDropzone.Reject>
                <X
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                  strokeWidth={1.5}
                />
              </MantineDropzone.Reject>
              <MantineDropzone.Idle>
                {imageUrl ? (
                  <>
                    <Image
                      src={imageUrl}
                      alt="Uploaded product"
                      mt="md"
                      style={{ maxWidth: '100%', maxHeight: 220, objectFit: 'contain' }}
                    />
                  </>
                ) : (
                  <ImageIcon
                    style={{
                      width: rem(52),
                      height: rem(52),
                      color: 'var(--mantine-color-dimmed)',
                    }}
                    strokeWidth={1.5}
                  />
                )}
              </MantineDropzone.Idle>
              {!imageUrl && (
                <Text size="xs" inline c="dark">
                  Перетащите изображения товара сюда или нажмите, чтобы выбрать файл
                </Text>
              )}
            </Group>
          </MantineDropzone>
          {imageUrl && (
            //@ts-ignore
            <Button color="red" onClick={() => setValue(name, [])} variant="outline">
              Удалить картинку товара
            </Button>
          )}
        </>
      )}
    />
  );
};
