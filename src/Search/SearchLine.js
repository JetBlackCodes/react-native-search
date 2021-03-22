import React from "react";
import {View, TextInput, StyleSheet} from "react-native";

export const SearchLine = props => (
  <View style={styles.searchContainer}>
    <View style={styles.block}>
      <TextInput style={styles.input} placeholder="Поиск"/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  block: {
    margin: 3,
    flexDirection: 'row',
    // backgroundColor: '#cdd0cb',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    height: 50,
    width: '100%',
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    // placeholderTextColor: '#f6f6f6',
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
  }
})
