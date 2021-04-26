import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Link } from "react-router-native";
import ColorTheme from "./ColorTheme"

export const Header = props => (
  <View style={styles.navbar}>
    <View style={styles.container}>
      <Link to="/" underlayColor={ColorTheme.primary}>
        <Text style={styles.text}>Назад</Text>
      </Link>
      <Text style={styles.text}>Экстренная помощь</Text>
      <Link to="/about" underlayColor={ColorTheme.primary}>
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
    paddingBottom: 10
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: ColorTheme.light,
    backgroundColor: ColorTheme.primary,
    fontSize: 20
  }
})
