import React from "react";
import {View, Text, StyleSheet } from "react-native";
import ColorTheme from "./ColorTheme";
import {CallButton} from "./Search/CallButton"

export const Article = () => (
  <View style={styles.container}>
    <Text style={styles.title}>{testTitle}</Text>
    <CallButton />
    <Text style={styles.text}>{testContent}</Text>
  </View>
)

export const styles = StyleSheet.create({
  container: {
    margin: 16,
    textAlign: 'justify'

  },
  title: {
    color: ColorTheme.dark,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    // fontFamily: 'Inter',
  },
  text: {
    color: ColorTheme.text,
    fontSize: 16,
    // fontFamily: 'Inter',
  }
})

export const testTitle = 'Post Title Here...'
export const testContent = 'Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. Dolore exercitation nulla tempor consequat aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure quis nulla eu consequat fugiat Lorem sunt magna et consequat labore. Laboris incididunt id Lorem est duis deserunt nisi dolore eiusmod culpa exercitation consectetur.\n' +
  '\n' +
  'Fugiat do aliqua laboris cillum sint dolor officia adipisicing excepteur fugiat officia. Cupidatat ut elit consequat ea laborum occaecat laborum aute consectetur Lorem exercitation. Lorem anim minim officia aliquip commodo deserunt mollit. Duis deserunt quis cillum voluptate duis ipsum quis incididunt elit excepteur excepteur labore duis cillum. Voluptate sint nulla minim eiusmod in nulla. Ea id ad duis esse adipisicing culpa ex esse ea dolore consequat. Reprehenderit eu minim veniam aliquip do ipsum duis do qui adipisicing aliquip ad occaecat.\n' +
  '\n' +
  'Enim reprehenderit sunt do do. Ex fugiat nisi sit anim culpa nisi. Non labore fugiat culpa magna. Commodo esse Lorem ex duis do et do. Est laboris cupidatat ad est anim adipisicing sit labore do dolor officia. Fugiat consequat in excepteur reprehenderit id aliquip voluptate sint enim proident aliquip occaecat quis non. Ad nulla aliqua est amet aliqua sint est occaecat amet sunt.\n' +
  '\n' +
  'Ullamco laborum qui sint officia officia ad Lorem culpa minim voluptate occaecat id duis esse. Ullamco sunt magna consectetur excepteur. Id cupidatat proident ex ad elit laboris. Nulla aute sit occaecat laboris. Laboris minim aliquip exercitation elit commodo ipsum et fugiat sit anim laborum proident cillum laboris.\n' +
  '\n' +
  'Et cillum tempor esse sit anim et veniam. Tempor magna irure ex ea id fugiat. Ex eu sint tempor quis exercitation amet ut deserunt sit fugiat aliquip nostrud nulla. Eu sunt laborum elit consectetur tempor sunt dolore in sunt reprehenderit voluptate dolore adipisicing. Proident eiusmod reprehenderit quis sint exercitation voluptate non labore. Sunt non sint in Lorem occaecat dolore tempor ipsum et proident sit Lorem ipsum officia.'
