import ChooseByCategory from '@/components/dashboard/data/ChooseByCategory';
import Wrapper from '@/hook/wrapper';
import { primary } from '@/styles/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Events() {
  const [searchText, setSearchText] = useState('');

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search events..."
            value={searchText}
            onChangeText={setSearchText}
          />
          <View style={styles.filter}>
            <Ionicons name={'filter'} size={20} color={'#fff'} />
          </View>
        </View>
        <ChooseByCategory />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    flex: 1,
  },
  filter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primary,
  },
});
