import EventCard, { EventProps } from '@/components/event/card/EventCard';
import { primary } from '@/styles/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

type HomeEventsProps = {
  events: any[];
};

export default function HomeEvents({ events = [] }: HomeEventsProps) {
  const router = useRouter();
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
      style={{ marginRight: 10, width: 230 }}
      onPress={() => {return router.push(`/event/${item?.id}?title=${item?.title}`)}}
    />
  )};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Events 🔥</Text>
        <TouchableOpacity onPress={() => {return router.push('/events')}}>
          <Text style={styles.all}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={events}
        keyExtractor={(item) => {return item.id}}
        renderItem={renderItem}
        contentContainerStyle={{ borderRadius: 12 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
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
    marginTop: -120,
    paddingHorizontal: 12,
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
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  all: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: primary,
    fontWeight: '600',
  },
});
