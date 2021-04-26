import React from "react";
import {View, Text, StyleSheet} from "react-native";

import {SearchLine} from "./SearchLine";
import {SearchResult} from "./SearchResult";
import {Category} from "./Category";
import ColorTheme from "../ColorTheme";

const Search = () => {
  const [search, onChangeSearch] = React.useState("");

    return (
      <View>
        <SearchLine onChangeSearch={onChangeSearch}/>
        {search === '' && <Category />}
        {search === 'Стекольная заноза' && <SearchResult />}
        {search !== '' && search !== 'Стекольная заноза' &&  <Text style={styles.title}>По вашему запросу ничего не найдено</Text>}
      </View>
    )
}

export default Search;

export const styles = StyleSheet.create({
  title: {
    color: ColorTheme.dark,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 38,
  },
})
