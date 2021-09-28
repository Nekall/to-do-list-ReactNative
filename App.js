import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoScreen from "./src/screens/Tasks"
import { Provider } from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TodoScreen />
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
