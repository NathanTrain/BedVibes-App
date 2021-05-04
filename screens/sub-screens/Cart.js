import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { cores } from "../../Themes";

function ItemListed({ cart, item, setCart }) {
  const { productName, preco, cores, image } = item;
  
  function removeItemFromList() {
    let newCart = []
    cart.map((i) => {
      if (i !== item) {
        newCart.push(i);
      }
    });
    setCart(newCart)
  }

  return (
    <View style={listStyle.box}>
      <Text>{productName}</Text>
      <View>
        <TouchableOpacity 
            onPress={() => {removeItemFromList()} }>
          <Ionicons
            name="close"
            size={18}
            color={"black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Cart({ cart, setCart }) {
  setCart(cart);
  if (cart.length == 0) {
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
    return (
      <View style={listStyle.container}>
        <ScrollView>
          {cart.map((item) => {
            return <ItemListed item={item} cart={cart} setCart={setCart} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

const listStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.dark,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  box: {
    backgroundColor: "green",
    margin: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

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
    fontFamily: "LouisGeorgeCafe",
    fontSize: 14,
  },
});

export default Cart;
