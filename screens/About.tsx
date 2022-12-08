import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { Pressable } from 'react-native';
import { RootStackParamList } from '../types/navigation';

type AboutProps = NativeStackScreenProps<RootStackParamList>;

const About = ({ navigation }: AboutProps) => {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text className="text-2xl underline text-blue-400">Go Back To Home</Text>
      </Pressable>
      <Pressable className="mt-10" onPress={() => navigation.navigate('Random')}>
        <Text className="text-2xl underline text-blue-400">Random</Text>
      </Pressable>
    </View>
  );
};

export default About;
