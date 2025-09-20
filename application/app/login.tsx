import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import GuestRoutes from '@/security/GuestRoutes';
import { primary } from '@/styles/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  const router = useRouter();
  return (
    <GuestRoutes>
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Input
            label="Email"
            placeholder="Enter your valid email address here"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Password"
            placeholder="Enter your valid password here"
            secureTextEntry
          />
          <View style={styles.actions}>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  textAlign: 'right',
                  color: '#555',
                  fontWeight: '600',
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <Button text="Login" onPress={() => {}} />
            <View style={styles.signupRow}>
              <Text style={styles.signupText}>Don’t have an account?</Text>
              <TouchableOpacity onPress={() => router.push('/signup')}>
                <Text style={styles.signupLink}> Sign up</Text>
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
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    color: primary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 100,
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
  },
});
