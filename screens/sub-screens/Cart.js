import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { cores } from "../../Themes";

function ItemListed({ item }) {}

function Cart({ route, navigation, shoppingList }) {
  if (shoppingList.length == 0) {
    return (
      <View style={stylesWithoutItens.container}>
        <View style={stylesWithoutItens.imageBox}>
          <View style={stylesWithoutItens.box} />
          <Ionicons
            name="sad"
            size={50}
            color={cores.dark}
            style={stylesWithoutItens.icon}
          />
        </View>
        <Text style={stylesWithoutItens.text}>
          Não há itens no carrinho de compra!
        </Text>
      </View>
    );
  } else {
    return shoppingList.map((item) => {
      return (
        <View>
          <Text>{item.name}</Text>
        </View>
      );
    });
  }
}

const stylesWithoutItens = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: cores.dark,
  },
  imageBox: {
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    position: "absolute",
    zIndex: 50,
    alignSelf: "center",
    rotation: -90,
  },
  box: {
    backgroundColor: "#555",
    width: 30,
    height: 30,
  },
  text: {
    margin: 10,
    color: "#555",
    fontFamily: "Adam",
    fontSize: 14,
  },
});

export default Cart;
