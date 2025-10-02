import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type CategoryProps = {
  id: string;
  slug: string;
  name: string;
  image: string;
  onPress?: (id: string) => void;
};

export default function CategoryCard({
  id,
  name,
  image,
  onPress,
  slug,
}: CategoryProps) {
  return (
    <TouchableOpacity
      key={id}
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        return onPress?.(slug);
      }}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 140,
    minHeight: 80,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#d8d8d8',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  count: {
    fontSize: 12,
    color: '#ddd',
    marginTop: 4,
  },
});
