import { Text, View, ScrollView } from 'react-native';
import { Card } from '@components';

const Random = () => {
  return (
    <ScrollView>
      <View className="flex-1 justify-center items-center bg-black py-[50px]">
        <Text className="text-green-500 text-5xl">Lorem ipsum</Text>
        <Text className="text-red-500 text-5xl mt-[30px]">With Padding</Text>
        <View className="w-[200px] h-[200px] bg-green-400 relative">
          <View className="flex items-center justify-center w-[100px] h-[100px] bg-blue-400 absolute right-0 bottom-0">
            <Text className="text-2xl uppercase">lorem</Text>
          </View>
        </View>
        <Card title="This is my components" />
        <Card type={'fullWidth'} title="This is a CVA Component" />
      </View>
    </ScrollView>
  );
};

export default Random;
