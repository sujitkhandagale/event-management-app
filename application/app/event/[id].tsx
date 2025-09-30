import { EventProps } from '@/components/event/card/EventCard';
import { primary } from '@/styles/colors';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Id() {
  const { id, title } = useLocalSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();
  const [eventInformation, setEventInformation] = useState<EventProps | null>(
    null,
  );

  useEffect(() => {
    setLoading(true);
    navigation.setOptions({
      title: title,
      headerStyle: { backgroundColor: primary },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold', fontSize: 14 },
    });
  }, [id, navigation, title]);

  // call here using socket event
  useEffect(() => {
    setEventInformation(null);
  }, []);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={primary} />
        </View>
      )}
      <View>
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path d="M12 2L2 22h20L12 2z" fill="purple" />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 1,
  },
});
