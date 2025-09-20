import { primary } from '@/styles/colors';
import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

export default function GettingStarted() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const checkGettingStarted = useCallback(async () => {
    try {
      const key = await SecureStore.getItemAsync('gettingStarted');
      if (key === 'true') {
        router.replace('/login');
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    checkGettingStarted().then();
  }, [checkGettingStarted]);

  const handleContinue = async () => {
    await SecureStore.setItemAsync('gettingStarted', 'true'); // set key
    router.replace('/login'); // navigate to login
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require('@/assets/placeholder/getting-started/confetti.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>
          Stay updated with your college/society events
        </Text>
        <Text style={styles.subtitle}>
          Create and share your events with your society/friends. allow only
          that you loves.
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Let’s get started!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    flex: 1,
    paddingHorizontal: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottom: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
    textAlign: 'center',
    color: '#a5a4a4',
  },
  button: {
    width: '100%',
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primary,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
