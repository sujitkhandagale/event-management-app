// OpenStreetMap.js
import { primary } from '@/styles/colors';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const OpenStreetMap = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={primary} />
    </View>
  );
};

export default OpenStreetMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
