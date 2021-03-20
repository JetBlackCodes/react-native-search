import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

export const Navbar = ({title}) => (
  <View style={styles.navbar}>
    <View style={styles.container}>
      <Button style={styles.button} color='#5DB075' title='Назад'/>
      <Text style={styles.text}>{title}</Text>
      <Button style={styles.button} color='#5DB075' title='О нас'/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  navbar: {
    height: 78,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#5DB075',
    paddingBottom: 2
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  button: {
    // textColor: 'white'
  }
})
