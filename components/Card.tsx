import React from 'react';
import { View, ViewProps, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const card = cva('h-[200px] bg-orange-400 items-center justify-center', {
  variants: {
    type: {
      auto: 'w-[200px]',
      fullWidth: 'w-full bg-orange-800',
    },
  },
  defaultVariants: {
    type: 'auto',
  },
});

interface Props extends VariantProps<typeof card> {
  title: string;
}

const Card = ({ type = 'auto', title }: Props) => {
  return (
    <View className={card({ type })}>
      <Text className="text-white">{title}</Text>
    </View>
  );
};

export default Card;
