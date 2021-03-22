import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import {Header} from "./src/Header";
import {Article} from "./src/Article";
import Search from "./src/Search/Search";

export default function App() {
  // const [search, setSearch] = useState([])
  //
  // const addTodo = title => {
  //   const newTodo = {
  //     id: Date.now()
  //   }
  // }

  return (
    <NativeRouter>
      <View >
        <Header />

        <Route exact path="/" component={Search} />
        <Route path="/article" component={Article} />
      </View>
    </NativeRouter>
  );
}
