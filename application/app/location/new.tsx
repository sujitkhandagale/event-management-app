import Close from '@/assets/icons/close-svgrepo-com.svg';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import OpenStreetMap from '@/components/map/OpenStreetMap';
import { primary } from '@/styles/colors';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function New() {
  // const {} = useLocalSearchParams();
  const navigation = useNavigation();

  const [tag, setTag] = useState<string>('Home');

  useEffect(() => {
    navigation.setOptions({
      title: 'New Address',
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { fontWeight: 'bold', fontSize: 16 },
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={62}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.map}>
          <OpenStreetMap />
        </View>
        <View style={styles.address}>
          <View style={styles.header}>
            <Text style={styles.title}>Enter Complete Address</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Close width={30} height={30} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: '#666',
              marginBottom: 4,
              paddingVertical: 4,
            }}
          >
            This address will be used for events listing and reminders. we store
            your address securely with 256 bit encryption.
          </Text>
          <View style={styles.row}>
            <View style={styles.input}>
              <Input label={'Address'} placeholder={'Your address here'} />
            </View>
            <View style={styles.input}>
              <Input label={'City'} placeholder={'Your city here'} />
            </View>
          </View>
          <Input label={'State'} placeholder={'Your state here'} />
          <Input label={'Country'} placeholder={'Your country here'} />
          <View style={styles.tags}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Tags
            </Text>
            <View style={styles.tagRow}>
              {predefinedTags?.map((item: string, index: number) => (
                <TouchableOpacity
                  onPress={() => setTag(item)}
                  key={index}
                  style={[styles.tag, tag === item ? styles.tagActive : {}]}
                >
                  <Text
                    style={{
                      color: tag === item ? '#fff' : '#000',
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.button}>
            <Button text={'Save Address'} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  map: {
    flex: 1,
    height: 250,
  },
  address: {
    backgroundColor: '#fff',
    padding: 24,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    width: '49%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
  },
  tags: {
    flexDirection: 'column',
    gap: 10,
    paddingBottom: 10,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 0,
  },
  tag: {
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 12,
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
    borderWidth: 0,
    borderColor: '#ccc',
  },
  tagActive: {
    backgroundColor: primary,
    color: '#fff',
    borderColor: primary,
  },
});

const predefinedTags = ['Home', 'Office', 'Work', 'Other'];
