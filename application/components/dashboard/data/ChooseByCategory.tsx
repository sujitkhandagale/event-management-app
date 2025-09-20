import CategoryCard, {
  CategoryProps,
} from '@/components/event/category/CategoryCard';
import { primary } from '@/styles/colors';
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import categoriesData from '@/data/categories.json'; // make sure path is correct

export default function ChooseByCategory() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const renderItem = ({ item }: { item: CategoryProps }) => (
    <CategoryCard
      id={item.id}
      slug={item.slug}
      name={item.name}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choose By Category</Text>
        <Text style={styles.all}>View all</Text>
      </View>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 22,
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
