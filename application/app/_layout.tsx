import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack initialRouteName={'dashboard'}>
        <Stack.Screen name="initial" options={{ headerShown: false }} />
        <Stack.Screen
          name="settings"
          options={{ title: 'Settings', headerShown: false }}
        />
        <Stack.Screen
          name="notifications"
          options={{
            title: 'Notifications',
            headerShown: true,
            headerBackTitle: 'Back',
            headerTitleStyle: {
              fontSize: 14,
            },
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#202020',
            },
          }}
        />
        <Stack.Screen
          name="login"
          options={{ headerShown: false, title: 'Login' }}
        />
        <Stack.Screen name="GettingStarted" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="forgotPassword" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="events" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
