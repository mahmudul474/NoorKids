import {
    signInAnonymously,
    User,
} from 'firebase/auth';

import { auth } from '@/config/firebase';

export async function signInAsGuest(): Promise<User> {
  try {
    if (auth.currentUser) {
      return auth.currentUser;
    }

    const result = await signInAnonymously(auth);

    console.log(
      'Guest user created:',
      result.user.uid,
    );

    return result.user;
  } catch (error) {
    console.error(
      'Guest authentication failed:',
      error,
    );

    throw error;
  }
}