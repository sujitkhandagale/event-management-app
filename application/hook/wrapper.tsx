import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  safeKeyboard?: boolean;
  style?: StyleProp<ViewStyle>;
  safeStyle?: StyleProp<ViewStyle>;
};

export default function Wrapper({
  children,
  safeKeyboard = true,
  style = {},
  safeStyle = {},
}: Props) {
  return (
    <KeyboardAvoidingView
      style={[styles.flex]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={safeKeyboard ? 64 : 0}
    >
      <ScrollView
        contentContainerStyle={[styles.scrollView]} // Fix
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
