import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import GuestRoutes from '@/security/GuestRoutes';
import { primary } from '@/styles/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Signup() {
  const router = useRouter();
  return (
    <GuestRoutes>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Let’s Join With Us</Text>
          <Text style={styles.subtitle}>
            Provide the necessary information and jump into the world of events
          </Text>
        </View>
        <View style={styles.form}>
          <Input
            label="Full Name"
            placeholder="Enter your valid email address here"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Email Address"
            placeholder="abcd@domain.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry
          />
          <Input
            label="Password"
            placeholder="Re-Enter password"
            secureTextEntry
          />
          <View style={styles.actions}>
            <Button text="Register" onPress={() => {}} />
            <View style={styles.signupRow}>
              <Text style={styles.signupText}>You have an account?</Text>
              <TouchableOpacity onPress={() => router.push('/login')}>
                <Text style={styles.signupLink}> Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </GuestRoutes>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    padding: 16,
  },
  header: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
    color: '#fff',
  },
  subtitle: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#fff',
    opacity: 0.7,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  form: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  bottom: {
    marginTop: 'auto',
    paddingBottom: 24,
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  signupText: {
    fontSize: 14,
    color: '#555',
  },
  signupLink: {
    fontSize: 14,
    fontWeight: '600',
    color: primary,
    textDecorationLine: 'underline',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingVertical: 10,
  },
});
