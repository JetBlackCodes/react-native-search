import React from "react";
import {View, Text} from "react-native";
import {styles, testContent} from './Article'

export const AboutUs = () => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{testContent}</Text>
  </View>
)

const title = 'О нас'
