import ChooseByCategory from '@/components/dashboard/data/ChooseByCategory';
import HomeEvents from '@/components/dashboard/data/HomeEvents';
import PromotedEvents from '@/components/dashboard/data/PromotedEvents';
import UserInfo from '@/components/dashboard/user/UserInfo';
import TestEvents from '@/data/events.json';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function Dashboard() {
  const events = TestEvents || [];
  const data = [
    {
      key: '1',
    },
    {
      key: '2',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({ item }) => null} // Since we're only using ListHeaderComponent
          ListHeaderComponent={
            <>
              <UserInfo name="Test User" email="test@gmail.com" />
              <HomeEvents events={events} />
              <ChooseByCategory />
              <PromotedEvents events={events} />
            </>
          }
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  content: {},
});
