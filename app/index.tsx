import React from 'react';
import { useRouter } from 'expo-router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="container text-center">
      <h1 className="my-4">Welcome to the Home Page</h1>
      <button className="btn btn-primary" onClick={() => router.push('/openai')}>
        Go to OpenAI Page
      </button>
    </div>
  );
}
