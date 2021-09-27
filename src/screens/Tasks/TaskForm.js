import React, { useState } from "react";
import Header from "../../components/Header";
import Task from "../../screens/Tasks/Task.js";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function TodoScreen({ addTask }){

  const [newTask, setNewTask] = useState("");

  const onChangeText = (v) => {
    setNewTask(v)
  };

  const addNewTask = () => {
    if(newTask !== ""){
      addTask(newTask)
      setNewTask("")
    }
  };

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={newTask}
        placeholder="Nouvelle tâche"
      />
      <Button
        color="grey"
        title="Ajouter"
        onPress={addNewTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#000000",
    padding: 2,
    width: "70%",
  }
});
