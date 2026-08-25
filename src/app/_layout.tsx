import {
  DarkTheme,
  DefaultTheme,
  Stack,
  ThemeProvider,
} from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { signInAsGuest } from '@/services/authentication/guestAuth';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    const initializeGuestUser = async () => {
      try {
        const user = await signInAsGuest();

        console.log(
          'Firebase Guest UID:',
          user.uid,
        );
      } catch (error) {
        console.error(
          'Firebase Guest Authentication Error:',
          error,
        );
      }
    };

    initializeGuestUser();
  }, []);

  return (
    <ThemeProvider
      value={
        colorScheme === 'dark'
          ? DarkTheme
          : DefaultTheme
      }
    >
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}