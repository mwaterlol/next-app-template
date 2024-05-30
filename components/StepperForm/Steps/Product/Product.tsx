import { Stack } from '@mantine/core';
import { useFormContext, WatchObserver } from 'react-hook-form';
import { StepperFormData } from '../../types';
import { useEffect, useState } from 'react';
import { Dropzone } from '@/components/Dropzone';

export const Product = () => {
  const { watch, register, control, setValue } = useFormContext<StepperFormData>();
  const uploadedFile = watch('productPicture');
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
    <Stack my="lg" p="xl" align="center">
      <Dropzone name={'productPicture'} />
    </Stack>
  );
};
