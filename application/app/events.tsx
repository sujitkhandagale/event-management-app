import EventCard, { EventProps } from '@/components/event/card/EventCard';
import TestEvents from '@/data/events.json';
import { primary } from '@/styles/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Events() {
  const [searchText, setSearchText] = useState('');
  const events = TestEvents || [];

  const renderItem = ({ item }: { item: EventProps }) => {return (
    <EventCard
      id={item.id}
      title={item.title}
      description={item.description}
      image={item.image}
      location={item.location}
      date={item.date}
      time={item.time}
      price={item.price}
      category={item.category}
      isFavorite={item.isFavorite}
      members={item.members}
      joined={item.joined}
      isJoined={item.isJoined}
    />
  )};
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search events..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
          <View style={styles.filter}>
            <Ionicons name={'filter'} size={20} color={'#fff'} />
          </View>
        </SafeAreaView>
        <View style={styles.events}>
          <FlatList
            data={events}
            keyExtractor={(item) => {return item.id}}
            renderItem={renderItem}
            horizontal={false}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  events: {
    paddingTop: 10,
  },
  searchInput: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    flex: 1,
    color: '#fff',
  },
  filter: {
    width: 45,
    height: 45,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primary,
  },
});
