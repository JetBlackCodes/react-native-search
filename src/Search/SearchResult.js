import React, { useState }  from "react";
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import ColorTheme from "../ColorTheme";

const DATA = ["Порезал палец", "Загорелась розетка", "Пожар", "Help"];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Search result ${index+1}`
});

const getItemCount = () => 50;

const Item = ({ title }) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const SearchResult = props => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        key={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    height: 30,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: ColorTheme.light,
    borderBottomColor: ColorTheme.gray
  },
  title: {
    fontSize: 16,
    marginBottom: 5
  },
});
