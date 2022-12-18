import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';


export default function home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={require('../assets/logo.png')} />
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <View style={styles.button}>
          <Text style={styles.buttonstyles}> Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <View style={styles.button}>
          <Text style={styles.buttonstyles}> Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8FCFC',
    alignItems: 'center',
  },
  picture: {
    resizeMode: "contain",
    width: 420,
    height: 420,
    top : 150
  },
   button: {
    backgroundColor: "#CDD8E3",
    height: 30,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    top: 20,
    borderWidth:2
  },
  buttonstyles: {
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
