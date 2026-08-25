import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAuPRwbSvG7aUoY21fFBKYJroE7aZ5GuUk',
  authDomain: 'noorkids-2026.firebaseapp.com',
  projectId: 'noorkids-2026',
  storageBucket: 'noorkids-2026.firebasestorage.app',
  messagingSenderId: '303882226626',
  appId: '1:303882226626:web:136fad4afcebef7f2a645b',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;