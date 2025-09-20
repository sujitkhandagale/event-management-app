import EventCard, { EventProps } from '@/components/event/card/EventCard';
import { primary } from '@/styles/colors';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Props = {
  events: any[];
};

export default function PromotedEvents({ events = [] }: Props) {
  const renderItem = ({ item }: { item: EventProps }) => (
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
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Promoted Events</Text>
      </View>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ borderRadius: 12 }}
        showsVerticalScrollIndicator={true}
        horizontal={false}
        nestedScrollEnabled={true} // <-- important
        scrollEnabled={true}
        style={{
          borderRadius: 12,
          overflow: 'hidden',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 24,
  },
  header: {
    paddingVertical: 20,
    paddingBottom: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: '#111',
  },
  all: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: primary,
    fontWeight: '600',
  },
});
