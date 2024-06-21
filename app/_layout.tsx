import React from 'react';
import { View } from 'react-native';
import { useRouter, Slot } from 'expo-router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="btn btn-primary me-2" onClick={() => router.push('/')}>Home</button>
          <button className="btn btn-primary me-2" onClick={() => router.push('/login')}>Login</button>
          <button className="btn btn-primary me-2" onClick={() => router.push('/signup')}>Sign Up</button>
          <button className="btn btn-primary" onClick={() => router.push('/openai')}>OpenAI</button>
        </div>
      </nav>
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Slot />
        {children}
      </main>
    </div>
  );
}