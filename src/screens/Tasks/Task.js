import React, { useState } from "react";
import Header from "../../components/Header";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function TodoScreen({ task }){

  return(
    <View style={styles.container}>
      <View style={styles.SubContainer}>
        <Image
          style={styles.check}
          source={require('../../../assets/icons/unchecked.png')}
        />
        <Text style={styles.task}>{task.title}</Text>
      </View>
      <Image
        style={styles.trash}
        source={require('../../../assets/icons/trash.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  SubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  task: {
    marginLeft: 20,
  },
  check: {
    width: 30,
    height: 30,
  },
  trash: {
    width: 30,
    height: 30,
    },
});
