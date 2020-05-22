import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { tailwind, getColor } from './lib/tailwind';

export default function App() {
  return (
    <SafeAreaView style={tailwind('flex-1 justify-center items-center')}>
      <View style={tailwind('bg-black py-3 px-5 rounded-full')}>
        <Text style={tailwind('text-white font-bold')}>
          Hello Tailwind! 👋
        </Text>
      </View>
    </SafeAreaView>
  );
}
