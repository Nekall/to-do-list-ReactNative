import React, { useState } from "react";
import Header from "../../components/Header";
import Task from "../../screens/Tasks/Task.js";
import TaskForm from "../../screens/Tasks/TaskForm.js";
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function TodoScreen(){

  const [tasks, setTasks] = useState([
    {title: "Hello world", isCompleted: false},
    {title: "Bye world", isCompleted: false},
    {title: "Welcome back world", isCompleted: false},
  ])

  const renderItem = ({ item }) => {
    return(
      <Task task={ item }/>
    )
  }

  const addTask = (title) => {
    setTasks([...tasks, {
      id: Date.now(),
      title,
      isCompleted: false,
    }])
  }

  return(
    <>
      <FlatList
        contentContainerStyle={{flexGrow:1, margin: 20}}
        ListHeaderComponent={
          <>
            <Header />
            <TaskForm addTask={addTask} />
          </>
        }
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  )
}
