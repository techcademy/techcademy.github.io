import React, { useState } from 'react';
import { resetPassword } from '../utils/firebaseSetup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');

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
      <h1 className="my-4">Reset Password</h1>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handlePasswordReset}>Reset Password</button>
    </div>
  );
}
