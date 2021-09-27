import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function FloatingBtn({formVisible, setFormVisible}){

  const toggleForm = () => {
    setFormVisible(!formVisible);
  }

  return(
    <>
      <Pressable onPress={toggleForm}>
        <Image
          style={styles.addIcon}
          source={formVisible ? require('../../../assets/icons/cancel.png') : require('../../../assets/icons/add.png')}
        />
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  addIcon: {
      width: 50,
      height: 50,
    }
})
