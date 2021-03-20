import React from "react";
import {View, TextInput, StyleSheet, Button} from "react-native";

export const Add = props => (
  <View style={styles.block}>
    <TextInput style={styles.input}/>
    <Button style={styles.button} title='Найти'/>
  </View>
)

const styles = StyleSheet.create({
  block: {
    margin: 3,
    flexDirection: 'row',
    // backgroundColor: '#cdd0cb',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    borderBottomColor: '#7c9473'
  },
  button: {
    color:'#cdd0cb',
  }
})
