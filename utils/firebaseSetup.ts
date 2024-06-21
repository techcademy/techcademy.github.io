// firebaseSetup.ts
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz2uQXGeX9l1Y-vb6tgY5hlTTpJ-ZUZ7Y",
  authDomain: "techcademy-fa5ae.firebaseapp.com",
  projectId: "techcademy-fa5ae",
  storageBucket: "techcademy-fa5ae.appspot.com",
  messagingSenderId: "415322424704",
  appId: "1:415322424704:web:d49a001d79990069e82d65",
  measurementId: "G-7XHRR4XNR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error signing up: ', error);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error signing in: ', error);
  }
};

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Error resetting password: ', error);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out: ', error);
  }
};

export default app;
