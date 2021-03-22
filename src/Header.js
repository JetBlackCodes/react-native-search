import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import ColorTheme from "./ColorTheme"

export const Header = props => (
  <View style={styles.navbar}>
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text}>Назад</Text>
      </Link>
      <Text style={styles.text}>Help App</Text>
      <Link to="/" >
        <Text style={styles.text}>О нас</Text>
      </Link>
    </View>
  </View>
)

const styles = StyleSheet.create({
  navbar: {
    height: 78,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: ColorTheme.primary,
    paddingBottom: 2
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: ColorTheme.light,
    fontSize: 20
  }
})
