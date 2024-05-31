'use client';
import { Flex, rem, Skeleton, Stack, Title, Text } from '@mantine/core';

export const Result = () => {
  return (
    <Stack mt="lg">
      <Title order={4}>Результаты генерации:</Title>
      <Flex gap="md" wrap="wrap" justify="center">
        <Skeleton w={320} h={320} radius={rem(16)} />
        <Skeleton w={320} h={320} radius={rem(16)} />
        <Skeleton w={320} h={320} radius={rem(16)} />
        <Skeleton w={320} h={320} radius={rem(16)} />
      </Flex>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar bibendum laoreet. Sed
        molestie nisi vitae auctor congue. Pellentesque lacinia odio vitae quam dictum lobortis.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Suspendisse ullamcorper vehicula sapien nec rhoncus. Nam vel ligula dictum velit viverra
        ultrices quis non risus. In elementum varius egestas. Cras nec viverra turpis. Proin vel
        ante vel nunc dapibus dictum. Nulla malesuada lectus quis finibus gravida. Vestibulum orci
        turpis, finibus eget lobortis a, viverra et augue. Pellentesque eget magna non felis mollis
        congue. Fusce dignissim est non massa pretium, sed volutpat.
      </Text>
    </Stack>
  );
};
