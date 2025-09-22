import ChooseByCategory from '@/components/dashboard/data/ChooseByCategory';
import HomeEvents from '@/components/dashboard/data/HomeEvents';
import PromotedEvents from '@/components/dashboard/data/PromotedEvents';
import UserInfo from '@/components/dashboard/user/UserInfo';
import TestEvents from '@/data/events.json';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dashboard() {
  const events = TestEvents || [];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar backgroundColor="blue" translucent={false} />
        <UserInfo name="Test User" email="test@gmail.com" />
        <HomeEvents events={events} />
        <ChooseByCategory />
        <PromotedEvents events={events} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
});
