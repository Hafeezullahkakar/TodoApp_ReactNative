/** @format */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Task({ text }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
      </View>
      <Text style={styles.itemTxt}>{text}</Text>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
      backgroundColor:"#fff",
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      marginBottom: 10
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
  },
  square: {
      height: 24,
      width: 24,
      backgroundColor: "#55BCF6",
      opacity: 0.4,
      borderRadius: 3
    },
    itemTxt:{
        maxWidth:"80%",
    },
    circular: {
      borderRadius: 50,
      width: 12,
      height: 12,
      backgroundColor: "#55BCF6",   
  },
});
