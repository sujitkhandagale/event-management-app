import MyAddress from '@/components/location/address/MyAddress';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

export default function Location() {
  const navigation = useNavigation();
  const [screen, setScreen] = useState<string>('address');

  useEffect(() => {
    navigation.setOptions({
      title: 'My Address',
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { fontWeight: 'bold', fontSize: 16 },
    });
  }, [navigation]);
  return (
    <View>
      {screen === 'address' && (
        <MyAddress
          address={[
            {
              name: 'Home',
              address: 'Andheri, Mumbai, Maharashtra - 70001',
            },
            {
              name: 'Office',
              address: 'Andheri, Mumbai, Maharashtra - 70001',
            },
          ]}
        />
      )}
    </View>
  );
}
