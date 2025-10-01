import { primary } from '@/styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

type Props = {
  name: string;
  email: string;
};

export default function UserInfo({ name, email }: Props) {
  const router = useRouter();
  return (
    <LinearGradient
      colors={['#202020', '#181819']} // gradient colors
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.options}>
          <TouchableOpacity>
            <Ionicons name="notifications" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={'settings'} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Image
            src={`https://avatar.iran.liara.run/username?username=${name}`}
            style={styles.image}
          />
          <View style={styles.bio}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push('/location')}
            style={styles.location}
          >
            <Text
              style={{
                color: '#b5b3b3',
              }}
            >
              Current Location
            </Text>
            <View style={styles.row}>
              <Text style={styles.address}>Mumbai - 70001</Text>
              <Ionicons name={'location'} color={primary} size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search favorite events by name, city"
            placeholderTextColor="#999"
            clearButtonMode="while-editing"
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingVertical: 140,
    padding: 20,
    paddingHorizontal: 12,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 18,
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'red',
    marginRight: 15,
  },
  bio: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    color: '#bbb',
    fontSize: 12,
    marginTop: 2,
  },
  location: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 140,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  address: {
    fontSize: 12,
    color: '#fff',
    paddingVertical: 2,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2a2a',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#fff',
  },
});
