import React  from "react";
import { View, VirtualizedList, StyleSheet, Text } from 'react-native';
import ColorTheme from "../ColorTheme";
import { Link } from "react-router-native";
import {DATA} from "../data"

const getItem = (data, index) => ({
  key: Math.random().toString(6).substring(0),
  title: data[index].title
});

const getItemCount = (data) => data.length;

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Link to="/article" underlayColor="#fff">
        <Text style={styles.title}>{title}</Text>
      </Link>
    </View>
  )
}

export const SearchResult = () => {
  return (
      <VirtualizedList
        data={DATA}
        initialNumToRender={0}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        key={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
  );
}

const styles = StyleSheet.create({
  item: {
    height: 70,
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
