import LocationPlaceholder from '@/assets/icons/location-pin-svgrepo-com.svg';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Plus from '@/assets/icons/plus-svgrepo-com.svg';
import { useRouter } from 'expo-router';

type Props = {
  address: any[];
};

export default function MyAddress({ address = [] }: Props) {
  const router = useRouter();
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.address}>
        <Ionicons name="home" size={20} color="#555" />
        <View style={styles.addressInfo}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.addressText}>{item?.address}</Text>
        </View>
        <View style={styles.option}>
          <Ionicons name="ellipsis-vertical" size={20} color="#555" />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push('/location/new')}
        style={styles.addAddress}
      >
        <Plus width={24} height={24} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
          }}
        >
          Add Address
        </Text>
      </TouchableOpacity>
      {address?.length > 0 ? (
        <FlatList data={address} renderItem={renderItem} />
      ) : (
        <View style={styles.noAddress}>
          <LocationPlaceholder width={60} height={60} />
          <Text style={styles.title}>No Address Found</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  addAddress: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 24,
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  noAddress: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
    margin: 20,
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 14,
    gap: 14,
    borderRadius: 10,
    shadowOpacity: 0.05,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  addressInfo: {
    flex: 1,
    paddingRight: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },

  addressText: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },

  option: {
    paddingLeft: 5,
  },
});
