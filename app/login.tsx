import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { signIn, resetPassword } from '../utils/firebaseSetup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      alert('Login Successful!');
      router.push('/');
    } catch (error) {
      alert('Login Failed!');
    }
  };

  const handlePasswordReset = async () => {
    try {
      await resetPassword(email);
      alert('Password reset email sent!');
    } catch (error) {
      alert('Password reset failed!');
    }
  };

  return (
    <div className="container text-center">
      <h1 className="my-4">Login</h1>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSignIn}>Login</button>
      <div className="mt-3">
        <span className="text-primary" style={{ cursor: 'pointer' }} onClick={handlePasswordReset}>
          Forgot Password?
        </span>
      </div>
    </div>
  );
}
