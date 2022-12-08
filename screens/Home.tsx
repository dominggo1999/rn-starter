import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Pressable } from 'react-native';
import { RootStackParamList } from '../types/navigation';

type HomeProps = NativeStackScreenProps<RootStackParamList>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View className="flex flex-1 items-center justify-center">
      <View className="flex flex-row mb-3">
        <Text>Welcome to </Text>
        <Text className="font-bold text-red-500 uppercase">rn-starter</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('About')}>
        <Text className="text-2xl underline text-blue-400">About</Text>
      </Pressable>
    </View>
  );
};

export default Home;
