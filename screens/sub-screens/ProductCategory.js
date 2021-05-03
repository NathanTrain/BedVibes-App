import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { cores } from "../../Themes";

function ProductScreen({ route, navigation }) {
  const { screenName, itens } = route.params;

  navigation.setOptions({ title: screenName });

  return (
    <View style={styles.container}>
      <View style={styles.insider}>
        {itens.map((item) => {
          return (
            <TouchableOpacity activeOpacity={0.7} style={styles.box}>
              {/* image */}
              <Image style={{ width: 125, height: 125 }} source={item.image} />

              {/* title */}
              <Text style={styles.title}>{item.productName}</Text>

              {/* $$$ */}
              <Text style={{ ...styles.title, fontSize: 14 }}>
                R${item.preco}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.dark,
    margin: 0,
    padding: 10,
    paddingHorizontal: 20,
  },
  insider: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "white",
    padding: 20,
    margin: 5,
    height: 250,
    width: 175,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontFamily: "Adam",
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default ProductScreen;
