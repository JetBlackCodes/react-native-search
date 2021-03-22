import React from "react";
import {View} from "react-native";

import {SearchLine} from "./SearchLine";
import {SearchResult} from "./SearchResult";

const Search = props => (
  <View>
    <SearchLine />
    <SearchResult />
  </View>
)

export default Search;
