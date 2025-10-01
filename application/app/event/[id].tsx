import { EventProps } from '@/components/event/card/EventCard';
import { primary } from '@/styles/colors';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

export default function Id() {
  const { id, title } = useLocalSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const [eventInformation, setEventInformation] = useState<EventProps | null>(
    null,
  );

  useEffect(() => {
    setLoading(false);
    navigation.setOptions({
      title: title,
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
      <ScrollView>
        <View style={styles.wallpaper}>
          <Image
            source={{ uri: 'https://picsum.photos/1080/1080?random=1' }}
            style={styles.wallpaper}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 1,
  },
  wallpaper: {
    height: 400,
    width: '100%',
    resizeMode: 'cover',
    position: 'relative',
    overflow: 'hidden',
    objectFit: 'cover',
  },
});
