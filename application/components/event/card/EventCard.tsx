import { primary } from '@/styles/colors';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type EventProps = {
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  time: string;
  price?: string;
  category?: string;
  id: string;
  onPress?: () => void;
  isFavorite?: boolean;
  onFavoritePress?: () => void;
  members: any[];
  joined?: number;
  isJoined?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function EventCard({
  title,
  description,
  image,
  location,
  date,
  time,
  price,
  category,
  onPress,
  isFavorite,
  onFavoritePress,
  members,
  joined,
  isJoined,
  style,
}: EventProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.details}>
        <Image source={{ uri: image }} style={styles.image} />
        <View
          style={{
            paddingVertical: 6,
            paddingHorizontal: 10,
          }}
        >
          <Text style={styles.category}>{category}</Text>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onFavoritePress}>
              <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={22}
                color={isFavorite ? 'red' : 'gray'}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
          <View style={styles.infoRow}>
            <Ionicons name="location" size={16} color={primary} />
            <Text style={styles.info}>{location}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="calendar" size={16} color={primary} />
            <Text style={styles.info}>
              {date} • {time}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="pricetag" size={16} color={primary} />
            <Text style={styles.info}>{price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footerRow}>
        <View style={styles.joinBox}>
          <View style={styles.joinedNumber}>
            <Ionicons name="people" size={18} color={primary} />
            <Text style={styles.members}>
              {members?.length}/{joined}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              ...styles.join,
              backgroundColor: isJoined ? primary : '#111',
            }}
            activeOpacity={0.6}
          >
            <Text style={[styles.joinText]}>
              {isJoined ? 'Joined' : 'Join Now'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 0.4,
    marginBottom: 15,
    padding: 6,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  details: {
    flexDirection: 'column',
    gap: 6,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    marginRight: 10,
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    gap: 5,
  },
  info: {
    fontSize: 13,
    color: '#444',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: primary,
  },
  members: {
    fontSize: 12,
    color: '#555',
  },
  joinedNumber: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  joined: {
    backgroundColor: primary,
  },
  join: {
    backgroundColor: '#111',
    padding: 7,
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  joinText: {
    color: '#fff',
    fontSize: 14,
  },
  joinBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
