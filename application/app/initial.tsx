import { primary, secondary } from '@/styles/colors';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function Initial() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [isLogged, setIsLogged] = useState(false); // Replace with Zustand or AsyncStorage later

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
      setIsLogged(false);
      setLoading(false);
    }, 2000);
    return () => {return clearTimeout(timer)};
  }, [isLogged]);

  useEffect(() => {
    if (!loading && ready) {
      router.replace(isLogged ? '/settings' : '/GettingStarted');
    }
  }, [isLogged, loading, ready, router]);

  return (
    <LinearGradient
      colors={[primary, secondary]} // gradient colors
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image
              source={require('@/assets/images/icon.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>Event Management App</Text>
          <ActivityIndicator size="large" color="#fff" style={styles.loader} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    position: 'absolute',
    bottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 14,
    textTransform: 'uppercase',
  },
  input: {
    width: '100%',
    marginBottom: 24,
  },
  loader: {
    marginTop: 16,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 140,
    height: 140,
    // backgroundColor: '#fff',
    borderRadius: 14,
  },
});
