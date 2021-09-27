import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TaskScreen from "./src/screens/Tasks"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
