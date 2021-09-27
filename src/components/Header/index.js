import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    const date = new Date();
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  return(
    <View style={styles.container}>
      <Text style={styles.date}>
        {`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 20,
  },
  date: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
