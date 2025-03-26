import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Layout({ children }) {
  return (
    <View style = {{flex:1}}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{console.log("Botão Clicado")}}>
          <Icon name="person" size={30} color="fff" />
        </TouchableOpacity>
      </View>
      {/* Conteudo Principal */}
      <View style={styles.container}>{children}</View>
    </View>
  );
}
const styles = StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: "#D3D3D3",
        paddingVertical: 40,
        alignItems: "center",
        position:"absolute",
        top: 0,
      },
      container:{
        width: "100%",
        backgroundColor: "#D3D3D3",
        paddingVertical: 40,
        alignItems: "center",
        position:"absolute"
      }
 
});
