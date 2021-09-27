import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function Counter({title, numb}){
  return(
    <View>
      <Text style={styles.numb}>{numb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  numb: {
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    color: "grey",
    fontSize: 18,
  }
})
