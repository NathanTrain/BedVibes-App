import * as React from "react";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { cores, theme } from "../Themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProductScreen from "./sub-screens/ProductCategory.js";

let widthWindow = Dimensions.get("window").width - 10;

function Produtos({ navigation }) {
  const [abas, setAbas] = useState([
    {
      name: "COBERTAS",
      icon: require("../assets/icons/coberta-icon.png"),
      image: require("../assets/category-images/coberta-category.png"),
      active: false,
      description:
        "perfeitas para se aquecer, as cobertas são grandes aliadas\nquando a temperatura cai, você merece esse conforto",
    },
    {
      name: "FRONHAS",
      icon: require("../assets/icons/fronha-icon.png"),
      image: require("../assets/category-images/fronha-category.png"),
      active: false,
      description:
        "Além de deixar a cama com uma decoração apaixonante,\na fronha vai proporcionar um sono mais confortável e acolhedor.",
    },
    {
      name: "LENÇÓIS",
      icon: require("../assets/icons/lencol-icon.png"),
      image: require("../assets/category-images/lencol-category.png"),
      active: false,
      description:
        "Lençóis: Sua cama merece toda a delicadeza dos nossos lençóis.\nCom lindas estampas, as peças vão proporcionar noites encantadoras.",
    },
  ]);

  const [products, setProducts] = useState([
    {
      type: "COBERTAS",
      itens: [
        {
          productName: "Cobertor Microfibra Estampado (King)",
          preco: "54,50",
          cores: ["vermelho", "azul", "verde água"],
          image: require("../assets/images/Coberta1.png"),
        },
        {
          productName: "Cobertor Microfibra Estampado",
          preco: "54,50",
          cores: ["roxo/branco", "azul/branco", "verde água/branco"],
          image: require("../assets/images/Coberta2.png"),
        },
        {
          productName: "Cobertor Microfibra de Casal",
          preco: "54,50",
          cores: ["vermelho", "rosa claro"],
          image: require("../assets/images/Coberta3.png"),
        },
        {
          productName: "Cobertor Microfibra de Solteiro",
          preco: "54,50",
          cores: ["marrom", "azul escuro"],
          image: require("../assets/images/Coberta4.png"),
        },
      ],
    },
    {
      type: "FRONHAS",
      itens: [
        {
          productName: "Jogo de Fronhas Microfibra Estampada",
          preco: "54,50",
          cores: ["amarelo queimado", "rosa claro"],
          image: require("../assets/images/Fronha1.png"),
        },
        {
          productName: "Fronha Microfibra Avulsa",
          preco: "54,50",
          cores: ["cinza", "roxo claro", "azul claro"],
          image: require("../assets/images/Fronha2.png"),
        },
        {
          productName: "Jogo de Fronha Microfibra Estampada",
          preco: "54,50",
          cores: ["azul/azul claro", "azul claro"],
          image: require("../assets/images/Fronha3.png"),
        },
      ],
    },
    {
      type: "LENÇÓIS",
      itens: [
        {
          productName: "Jogo de Lençol Microfibra (Solteiro)",
          preco: "54,50",
          cores: ["azul", "verde claro"],
          image: require("../assets/images/Lençol1.png"),
        },
        {
          productName: "Lençol de Elastico Avulso",
          preco: "54,50",
          cores: ["rosa", "azul claro"],
          image: require("../assets/images/Lençol3.png"),
        },
      ],
    },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: cores.dark }}>
      {/* header */}
      <View
        style={{
          flex: 0.1,
          zIndex: 50,
          borderBottomColor: "#555",
          borderBottomWidth: 0.5,
        }}
      >
        <View style={{ ...theme.container, paddingVertical: 10 }}>
          <Text style={styles.headerText}>Bed Vibes</Text>
          {/* header buttons */}
          <View style={styles.headerButtons}>
            <TouchableOpacity
              onPress={() => alert("pesquisa")}
              style={styles.headerIndividualButton}
            >
              <Ionicons name="search" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert("carrinho")}
              style={styles.headerIndividualButton}
            >
              <MaterialIcons name="shopping-outline" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* body */}
      <View style={{ flex: 0.9, margin: 10, marginTop: 0 }}>
        <ScrollView style={styles.itemsGroup}>
          {/* category button */}
          {abas.map(({ name, icon, image, active, description }, id) => {
            var listItens;
            {
              products.map((category) => {
                if (category.type === name) {
                  listItens = category.itens;
                }
                return JSON.stringify(listItens);
              });
            }
            return (
              <SelectedAba
                name={name}
                icon={icon}
                image={image}
                active={active}
                description={description}
                id={id}
                abas={abas}
                setAbas={setAbas}
                navigation={navigation}
                itens={listItens}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

function SelectedAba({
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
}) {
  function activeAba(id) {
    let newAbas = [];
    abas.map((val, index) => {
      // val.active = id == index ? true : false;
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
                  screenName: name,
                  itens: itens,
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

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Produtos"
        component={Produtos}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

function Root() {
  return (
    <RootStack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: cores.dark,
          borderBottomColor: "#555",
          borderBottomWidth: 0.5,
        },
        headerTitleStyle: {
          color: "white",
          fontFamily: "DolceVita",
          fontSize: 20,
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerPressColorAndroid: "white",
        headerRight: () => {
          return (
            <View style={styles.headerButtons}>
              <TouchableOpacity
                onPress={() => alert("pesquisa")}
                style={styles.headerIndividualButton}
              >
                <Ionicons name="search" size={25} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert("carrinho")}
                style={styles.headerIndividualButton}
              >
                <MaterialIcons
                  name="shopping-outline"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          );
        },
      }}
    >
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Produto" component={ProductScreen} />
    </RootStack.Navigator>
  );
}
export default Root;

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
    fontFamily: "Arial",
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
