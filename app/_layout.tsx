import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useRouter, Slot } from 'expo-router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Bootstrap's JS needs to be initialized only in the browser environment
      require('bootstrap/dist/js/bootstrap.bundle.min');
    }
  }, []);

  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => router.push('/')}> 
            <img src="/logo.png" alt="Logo" width="120" height="45" className="d-inline-block align-top" />
          </a>
          <button className="btn btn-primary me-3" onClick={() => router.push('/')}>Home</button>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              User
            </button>
            <ul className="dropdown-menu" aria-labelledby="userDropdown">
              <li><a className="dropdown-item" href="#" onClick={() => router.push('/login')}>Login</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => router.push('/signup')}>Sign Up</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => router.push('/openai')}>OpenAI</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex-grow-1 d-flex justify-content-center align-items-center py-3">
        <div className="container bg-light p-4 rounded shadow">
          <Slot />
          {children}
        </div>
      </main>
    </div>
  );
}
