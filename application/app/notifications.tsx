import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const fakeNotifications = [
  {
    id: '1212',
    type: 'Welcome',
    title: 'Welcome To Event Management App',
    description: 'Thank you for joining our app!',
    time: '2 hours ago',
    image:
      'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '12121',
    type: 'Welcome',
    title: 'join the Birthday event at Mumbai',
    description: 'Thank you for joining our app!',
    time: '4 hours ago',
    image:
      'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

export default function Notifications() {
  const navigation = useNavigation();

  const [search, setSearch] = useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              setSearch(!search);
            }}
            style={{
              paddingRight: 10,
            }}
          >
            <Ionicons name="search" size={18} color="#fff" />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, search]);

  return (
    <SafeAreaView style={styles.container}>
      {search && (
        <View style={styles.searchBox}>
          <TextInput
            placeholder={'Search Notifications'}
            style={styles.searchInput}
          />
          <Ionicons
            onPress={() => {
              setSearch(false);
            }}
            name="close"
            size={18}
            color="#fff"
          />
        </View>
      )}
      <StatusBar style="light" />
      <FlatList
        data={fakeNotifications}
        keyExtractor={(item) => {
          return item?.id;
        }}
        renderItem={({ item }) => {
          return <NotificationItem notification={item} />;
        }}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const NotificationItem = ({ notification }: { notification: any }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: notification.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.time}>{notification.time}</Text>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.description}>{notification.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    position: 'relative',
  },
  searchBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2a2a',
    zIndex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
  searchInput: {
    width: '91%',
    borderRadius: 8,
    color: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowRadius: 6,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});
