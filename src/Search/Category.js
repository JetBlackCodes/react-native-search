import React  from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import ColorTheme from "../ColorTheme";
import { Link } from "react-router-native";

export const Category = () => {
  return (
    <View>
      <View style={styles.item}>
        <Image source={require('../../img/terrorism.png')} style={{ width: '100%', height: 200 }}/>
        <Link to="/article" underlayColor="#fff">
          <Text style={styles.title}>Терроризм</Text>
        </Link>
      </View>
      <View style={styles.item}>
        <Image source={require('../../img/posar.png')} style={{ width: '100%', height: 200 }}/>
        <Link to="/article" underlayColor="#fff">
          <Text style={styles.title}>Пожар</Text>
        </Link>
      </View>
      <View style={styles.item}>
        <Image source={require('../../img/stihiya.png')} style={{ width: '100%', height: 200 }}/>
        <Link to="/article" underlayColor="#fff">
          <Text style={styles.title}>Стихийные бедствия</Text>
        </Link>
      </View>
      <View style={styles.item}>
        <Image source={require('../../img/pp.png')} style={{ width: '100%', height: 200 }}/>
        <Link to="/article" underlayColor="#fff">
          <Text style={styles.title}>Первая помощь</Text>
        </Link>
      </View>
      <View style={styles.item}>
        <Image source={require('../../img/electro.png')} style={{ width: '100%', height: 200 }}/>
        <Link to="/article" underlayColor="#fff">
          <Text style={styles.title}>Электробезопасность</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 260,
    justifyContent: 'center',
    marginHorizontal: 16,
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: ColorTheme.light,
    borderBottomColor: ColorTheme.gray
  },
  title: {
    fontSize: 16,
    color: ColorTheme.dark,
  },
});
