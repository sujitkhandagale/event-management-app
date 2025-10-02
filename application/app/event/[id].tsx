import PartyPopper from '@/assets/icons/party-popper-svgrepo-com.svg';
import Button from '@/components/button/Button';
import { DotLoader } from '@/components/common/loader/DotLoader';
import { EventProps } from '@/components/event/card/EventCard';
import { primary } from '@/styles/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Id() {
  const { id, title } = useLocalSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();
  const router = useRouter();
  const [eventInformation, setEventInformation] = useState<EventProps | null>(
    null
  );

  useEffect(() => {
    // Simulate data fetch
    setTimeout(() => {
      setEventInformation({
        id: id as string,
        title: title as string,
        date: 'October 15, 2025',
        location: 'Pune, Maharashtra',
        joined: 10,
        members: [{ id: 'u1' }, { id: 'u2' }],
        description:
          'Join us for an unforgettable evening of music, food, and celebration!',
        image:
          'https://img.freepik.com/free-vector/party-crowd-summer-background_1048-10624.jpg?t=st=1759389447~exp=1759393047~hmac=e3873403e95eb81ef69b31a13ce2521d2dbe25fd723659438138091aabbdf991&w=2000',
      });
      setLoading(false);
    }, 1000);
  }, [id, title]);

  useEffect(() => {
    navigation.setOptions({
      title: title,
      headerTitleStyle: { fontWeight: 'bold', fontSize: 14 },
      headerTransparent: true,
      headerBackground: () => {
        return <View style={{ backgroundColor: 'transparent', flex: 1 }} />;
      },
    });
  }, [loading, navigation, title]);

  // join event room to get slots updates

  //   fetch event details here

  if (loading) {
    return (
      <View style={styles.loader}>
        <DotLoader count={3} size={46} dotRadius={6} color={primary} />
      </View>
    );
  }
  if (!eventInformation) {
    return (
      <View style={styles.notFoundWrapper}>
        <PartyPopper width={128} height={128} />
        <Text style={styles.notFoundTitle}>Event Not Found</Text>
        <Text style={styles.notFoundSubtitle}>
          We could&#39;t find the event you&#39;re looking for. It may have been
          removed or does&#39;t exist.
        </Text>
        <Button
          onPress={() => {
            return router.navigate('/dashboard');
          }}
          text={'Back To Home'}
        />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={{ uri: eventInformation.image }}
          style={styles.wallpaper}
        />
        <View style={styles.content}>
          <Text style={styles.category}>Sports</Text>
          <Text style={styles.title}>{eventInformation.title}</Text>
          <Text style={styles.dateContainer}>
            <View style={styles.date}>
              <Ionicons name="calendar" size={16} color={primary} />
              <Text>{eventInformation?.date}</Text>
            </View>
            <View style={styles.date}>
              <Ionicons name="time" size={16} color={primary} />
              <Text>12:34</Text>
            </View>
          </Text>
          <View style={styles.date}>
            <Ionicons name="location" size={16} color={primary} />
            <Text>{eventInformation.location}</Text>
          </View>
          <View style={styles.date}>
            <Ionicons name="pricetag" size={16} color={primary} />
            <Text>Free</Text>
          </View>
          <View style={styles.date}>
            <Ionicons name="people" size={16} color={primary} />
            <Text
              style={{
                color: primary,
                fontWeight: 'bold',
              }}
            >
              12/100
            </Text>
          </View>
          <Text style={styles.description}>{eventInformation.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.stickyButton}>
        <Button disabled={true} text={'Book Now'} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 100, // space for sticky button
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  wallpaper: {
    height: 400,
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 20,
  },
  category: {
    fontSize: 12,
    color: primary,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  date: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    fontSize: 14,
    paddingRight: 10,
    paddingVertical: 4,
    color: '#555',
  },
  location: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  description: {
    paddingTop: 10,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
    opacity: 0.9,
  },
  stickyButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  button: {
    backgroundColor: primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notFoundWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingBottom: 100,
  },
  notFoundTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 20,
  },
  notFoundSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 10,
  },
});
