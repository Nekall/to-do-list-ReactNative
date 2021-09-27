import React, { useState } from "react";
import Header from "../../components/Header";
import Task from "../../screens/Tasks/Task.js";
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default function TodoScreen(){

  const [todo, setTodo] = useState([
    {title: "Hello world", isCompleted: false},
    {title: "Bye world", isCompleted: false},
    {title: "Welcome back world", isCompleted: false},
  ])


  const renderItem = ({ item }) => {
    return(
      <Task task={ item }/>
    )
  }

  return(
    <>
      <FlatList
        contentContainerStyle={{flexGrow:1, margin: 20}}
        ListHeaderComponent={<Header />}
        data={todo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  )
}
