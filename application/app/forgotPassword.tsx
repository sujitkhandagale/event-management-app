import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import GuestRoutes from '@/security/GuestRoutes';
import { primary } from '@/styles/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgotPassword() {
  const router = useRouter();
  return (
    <GuestRoutes>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.title, styles.main]}>Forgot Password</Text>
        </View>
        <View style={styles.form}>
          <Input
            label="Email"
            placeholder="Enter email address here"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.actions}>
            <Button text="Submit" onPress={() => {}} />
            <View style={styles.signupRow}>
              <TouchableOpacity onPress={() => router.push('/login')}>
                <Text style={styles.signupLink}>Back to login</Text>
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
  main: {
    textAlign: 'left',
    alignItems: 'flex-start',
    fontSize: 34,
    fontWeight: '700',
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
