import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Fragment } from 'react';

export default function RootLayout() {
  return (
    <Fragment>
      <Stack initialRouteName={'initial'}>
        <Stack.Screen name="initial" options={{ headerShown: false }} />
        <Stack.Screen
          name="settings"
          options={{ title: 'Settings', headerShown: false }}
        />
        <Stack.Screen
          name="login"
          options={{ headerShown: false, title: 'Login' }}
        />
        <Stack.Screen name="GettingStarted" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </Fragment>
  );
}
