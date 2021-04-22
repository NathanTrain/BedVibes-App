import * as React from "react";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { cores, theme } from "../Themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect } from "react";

let widthWindow = Dimensions.get("window").width - 10;
let heightWindow = Dimensions.get("window").width - 10;

function Produtos({ navigation }) {
  const backImage = (id) => {
    return { uri: `https://picsum.photos/id/${id}/850/850` };
  };

  const [abas, setAbas] = useState([
    {
      name: "COBERTAS",
      icon: "bed",
      image: backImage(251),
      active: true,
      description:
        "perfeitas para se aquecer, as cobertas são\ngrandes aliadas quando a temperatura cai,\nvocê merece esse conforto",
    },
    {
      name: "FRONHAS",
      icon: "bed",
      image: backImage(255),
      active: false,
    },
    {
      name: "LENÇÓIS",
      icon: "bed",
      image: backImage(235),
      active: false,
    },
  ]);

  function nextAba(id) {
    let newAbas = abas.map((val) => {
      val.id == id ? (val.active = true) : (val.active = false);
      return val;
    });
    setAbas(newAbas);
  }

  const [products, setProducts] = useState([
    {
      abaType: [2],
      title: "Fronha Francesa",
      description: "descrição aqui\noutra linha aqui",
      materials: [
        { id: 1, title: "Algodão" },
        { id: 2, title: "Seda" },
        { id: 3, title: "Fibra" },
      ],
      image: { uri: "https://picsum.photos/300/250" },
    },
    {
      abaType: [1, 3],
      title: "Lençol gotoso",
      description: "Aaaa \nsocorro \nmemata",
      materials: [
        { id: 0, title: "Algodão" },
        { id: 1, title: "Seda" },
      ],
      image: { uri: "https://picsum.photos/id/21/300/250" },
    },
    {
      abaType: [1, 4],
      title: "Cobertor quentin hmm",
      description: "descrição aqui\noutra linha aqui",
      materials: [
        { id: 0, title: "Algodão" },
        { id: 1, title: "Fibra" },
      ],
      image: { uri: "https://picsum.photos/id/28/300/250" },
    },
    {
      abaType: [4],
      title: "cobertor lindo",
      description: "Aaaa \nsocorro \nmemata",
      materials: [
        { id: 0, title: "Seda" },
        { id: 1, title: "Fibra" },
      ],
      image: { uri: "https://picsum.photos/id/27/300/250" },
    },
    {
      abaType: [3],
      title: "Lençol lindo",
      description: "descrição aqui\noutra linha aqui",
      materials: [
        { id: 0, title: "Algodão" },
        { id: 1, title: "Seda" },
      ],
      image: { uri: "https://picsum.photos/id/24/300/250" },
    },
    {
      abaType: [1, 2],
      title: "Fronha fofa",
      description: "Aaaa \nsocorro \nmemata",
      materials: [
        { id: 0, title: "Seda" },
        { id: 1, title: "Fibra" },
      ],
      image: { uri: "https://picsum.photos/id/25/300/250" },
    },
  ]);

  useEffect(() => {
    let newAbaType = [];
    products.map((val) => {
      val.abaType.includes(1) ? newAbaType.unshift(val) : newAbaType.push(val);
    });
    setProducts(newAbaType);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: cores.dark }}>
      {/* header */}
      <View style={{ flex: 0.1, zIndex: 50 }}>
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
          {abas.map(({ name, icon, image, active, description }) => {
            return (
              <SelectedAba
                name={name}
                icon={icon}
                image={image}
                active={active}
                description={description}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

function SelectedAba({ name, icon, image, active, description }) {
  if (active) {
    return (
      <View>
        <ImageBackground
          source={image}
          blurRadius={2}
          style={styles.backgroundImage}
        >
          <View style={styles.imageCover} />
          <View style={styles.cover}>
            <View style={styles.imageIcon}>
              <MaterialIcons name="bed-king" size={40} color={cores.extra} />
              <Text style={styles.titleText}>{name}</Text>
              <View style={styles.descriptionBox}>
                <Text style={styles.activeDescription}>"{description}"</Text>
              </View>
            </View>
            <View style={{ position: "absolute"}}>
              <TouchableOpacity onPress={()=>alert('hey13')} style={styles.imageCoverClicable}  />
            </View>
            <TouchableOpacity
              onPress={() => alert("hey")}
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
      <TouchableOpacity onPress={() => alert("tela legal")}>
        <ImageBackground source={image} style={styles.backgroundImage}>
          <View style={styles.imageCover} />
          <View style={styles.cover}>
            <MaterialIcons name="bed-king" size={40} color={cores.extra} />
            <Text style={styles.titleText}>{name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

function ModalProductScreen({ route, navigation }) {
  navigation.setOptions({ title: route.params.title });

  const renderItem = ({ item }) => {
    return (
      <View style={modalStyles.item}>
        <Ionicons name="arrow-forward-outline" size={20} color={"white"} />
        <Text style={modalStyles.itemText}>{item.title}</Text>
      </View>
    );
  };

  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    var data = [];
    route.params.materials.map((item) => {
      data.push(item);
    });
    setDATA(data);
  }, []);

  const showAlert = () => {
    Alert.alert(
      //title
      "OPA!",
      // mensagem
      "Infelizmente não é possivel realizar um orçamento pois somos uma empresa fictícia.",
      [
        {
          text: "ata kk",
        },
      ]
    );
  };

  return <View />;
}

function ProductsView() {
  return <View />;
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
          borderBottomWidth: 1,
        },
        headerTitleStyle: {
          color: cores.title,
          fontSize: 24,
          fontWeight: "normal",
          paddingRight: 20,
        },
        headerTitleAlign: "left",
        headerTintColor: cores.extra,
        headerPressColorAndroid: cores.extra,
      }}
    >
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Produto" component={ModalProductScreen} />
    </RootStack.Navigator>
  );
}
export default Root;

const modalStyles = StyleSheet.create({
  container: {
    backgroundColor: cores.dark,
    flex: 1,
    padding: 20,
    paddingHorizontal: 30,
  },
  image: {
    width: widthWindow + 10,
    height: heightWindow - 150,
    paddingBottom: 10,
  },
  descriptionTitle: {
    color: cores.title,
    fontSize: 18,
  },
  description: {
    color: "white",
    marginLeft: 25,
    marginBottom: 15,
    fontSize: 16,
  },
  list: {
    marginLeft: 25,
    marginBottom: 20,
  },
  item: {
    paddingBottom: 8,
    flexDirection: "row",
  },
  itemText: {
    color: "white",
    fontSize: 16,
    paddingLeft: 5,
  },
});

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Ginchiest",
    textAlign: "center",
    color: cores.extra,
    fontSize: 30,
  },
  headerButtons: {
    // backgroundColor: "salmon", // * for debuging
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
  imageCover: {
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.5,
    width: widthWindow,
    height: 250,
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
