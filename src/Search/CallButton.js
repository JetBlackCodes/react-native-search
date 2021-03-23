import React from "react";
import {View, Text, StyleSheet, Linking } from "react-native";
import ColorTheme from "../ColorTheme";

export const CallButton = () => (
    <View style={styles.callButton}>
      <Text style={styles.buttonText} onPress={() => Linking.openURL('tel:112')}>
        Позвонить в службу спасения (112)
      </Text>
    </View>
)

const styles = StyleSheet.create({
  callButton: {
    height: 50,
    width: '100%',
    padding: 10,
    borderRadius: 100,
    backgroundColor: ColorTheme.primary,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    color: ColorTheme.light,
    fontWeight: "700",
    fontSize: 20,
  }
})
