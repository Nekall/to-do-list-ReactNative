import React, { useState } from "react";
import Header from "../../components/Header";
import Task from "../../screens/Tasks/Task.js";
import TaskForm from "../../screens/Tasks/TaskForm.js";
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function TodoScreen(){

  const [tasks, setTasks] = useState([]);

  const renderItem = ({ item }) => {
    return(
      <Task task={ item } updateTask={updateTask} deleteTask={deleteTask} />
    )
  };

  const addTask = (title) => {
    setTasks([...tasks, {
      id: Date.now(),
      title,
      isCompleted: false
    }])
  };

  const updateTask = (id) => {
    let newTasks = [];

    tasks.forEach((i) => {
      if(i.id !== id){
        newTasks.push(i)
        return;
      }

      newTasks.push({
        id,
        title: i.title,
        isCompleted: !i.isCompleted,
      })
    });

    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    let newTasks = [];

    tasks.forEach((i) => {
      if(i.id !== id){
        newTasks.push(i)
        return;
      }
    });

    setTasks(newTasks);
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
