import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Index() {
  const router = useRouter();
  return (
    <View>
      <Text onPress={() => router.push('/settings')}>Test Tool</Text>
    </View>
  );
}
