import React, { useState } from 'react';
import { signUp } from '../utils/firebaseSetup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      alert('Signup Successful!');
    } catch (error) {
      alert('Signup Failed!');
    }
  };

  return (
    <div className="container text-center">
      <h1 className="my-4">Sign Up</h1>
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
      <button className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
