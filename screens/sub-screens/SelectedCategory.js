import * as React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { cores } from "../../Themes";
import Ionicons from "react-native-vector-icons/Ionicons";

let widthWindow = Dimensions.get("window").width - 10;

function SelectedCategory({
  name,
  icon,
  image,
  active,
  description,
  id,
  abas,
  setAbas,
  navigation,
  itens,
  cart,
  setCart
}) {
  function activeAba(id) {
    let newAbas = [];
    abas.map((val, index) => {
      if (id == index) {
        if (val.active) {
          val.active = false;
        } else val.active = true;
      } else {
        val.active = false;
      }
      newAbas.push(val);
    });
    setAbas(newAbas);
  }

  if (active) {
    return (
      <View>
        <ImageBackground
          source={image}
          blurRadius={2.5}
          style={styles.backgroundImage}
        >
          <View style={styles.cover}>
            <View style={styles.imageIcon}>
              <Image source={icon} style={{ height: 55, width: 55 }} />
              <Text style={styles.titleText}>{name}</Text>
              <View style={styles.descriptionBox}>
                <Text style={styles.activeDescription}>"{description}"</Text>
              </View>
            </View>
            <View style={{ position: "absolute" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => activeAba(id)}
                style={{
                  ...styles.imageCoverClicable,
                  backgroundColor: "black",
                  opacity: 0,
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Produto", {
                  screenRoute: "Produto",
                  screenName: name,
                  itens,
                  cart,
                  setCart
                });
              }}
              style={styles.continueButton}
            >
              <Text style={styles.buttonText}>CONTINUAR</Text>
              <Ionicons name="arrow-forward-outline" size={15} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => activeAba(id)}>
        <ImageBackground source={image} style={styles.backgroundImage}>
          <View style={styles.cover}>
            <Image source={icon} style={{ height: 55, width: 55 }} />
            <Text style={styles.titleText}>{name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Ginchiest",
    textAlign: "center",
    color: cores.extra,
    fontSize: 30,
  },
  headerButtons: {
    padding: 10,
    position: "absolute",
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIndividualButton: {
    padding: 5,
    paddingHorizontal: 10,
  },
  backgroundImage: {
    marginVertical: 5,
    width: widthWindow,
    height: 250,
  },
  cover: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageIcon: {
    flex: 0.6,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageCoverClicable: {
    width: widthWindow,
    height: 250,
  },
  titleText: {
    // backgroundColor:'green', // * for debuggin
    textAlign: "center",
    color: "white",
    fontFamily: "DolceVita",
    fontSize: 30,
  },
  descriptionBox: {
    alignItems: "center",
  },
  activeDescription: {
    marginTop: 5,
    marginBottom: 10,
    color: "white",
    fontFamily: "LouisGeorgeCafe",
    fontSize: 10,
    textAlign: "center",
  },
  continueButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cores.extra,
    padding: 5,
    zIndex: 100,
  },
  buttonText: {
    marginHorizontal: 5,
    fontFamily: "DolceVita",
    fontSize: 15,
    color: "white",
  },
});

export default SelectedCategory;