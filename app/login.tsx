import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { signIn, resetPassword } from '../utils/firebaseSetup';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      alert('Login Successful!');
      // Navigate to home page
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
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleSignIn} />
      <Text style={styles.forgotPassword} onPress={handlePasswordReset}>
        Forgot Password?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    borderWidth: 1,
  },
  forgotPassword: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
