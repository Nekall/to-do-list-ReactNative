import React, { useState } from "react";
import Header from "../../components/Header";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function TodoScreen({ task, updateTask, deleteTask }){

  const checkTask = () => {
    updateTask(task.id)
  }

  const delTask = () => {
    deleteTask(task.id)
  }

  return(
    <View style={styles.container}>
      <View>
        <Pressable style={styles.SubContainer} onPress={checkTask}>
          <Image
            style={styles.icons}
            source={task.isCompleted ? require('../../../assets/icons/check.png') : require('../../../assets/icons/unchecked.png')}
          />
          <Text style={styles.task}>{task.title}</Text>
        </Pressable>
      </View>
      <Pressable onPress={delTask}>
        <Image
          style={styles.icons}
          source={require('../../../assets/icons/trash.png')}
        />
      </Pressable>
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
  icons: {
    width: 30,
    height: 30,
  },
});
