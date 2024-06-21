import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, Slot } from 'expo-router';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Button title="Home" onPress={() => router.push('/')} />
        <Button title="Login" onPress={() => router.push('/login')} />
        <Button title="Sign Up" onPress={() => router.push('/signup')} />
        <Button title="OpenAI" onPress={() => router.push('/openai')} />
      </View>
      <View style={styles.content}>
        <Slot />
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
