import * as React from "react";
import { LogBox, StatusBar, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import Home from "./screens/Home.js";
import Produtos from "./screens/Produtos.js";
import Sobre from "./screens/Sobre.js";
import Perfil from "./screens/Perfil.js";
import { cores } from "./Themes.js";

LogBox.ignoreAllLogs(true);

console.log(Dimensions.get("window").height);

function HomeScreen() {
  return <Home />;
}

function ProdutosScreen() {
  return <Produtos />;
}

function SobreScreen() {
  return <Sobre />;
}

function PerfilScreen() {
  return <Perfil />;
}

const Tab = createBottomTabNavigator();

export default function App() {
  // ! importing fonts
  const [loaded] = useFonts({
    DolceVita: require("./assets/fonts/Dolce-Vita.ttf"),
    DolceVitaLight: require("./assets/fonts/Dolce-Vita-Light.ttf"),
    DolceVitaBold: require("./assets/fonts/Dolce-Vita-Heavy-Bold.ttf"),
    Ginchiest: require("./assets/fonts/Ginchiest.ttf"),
    Adam: require("./assets/fonts/Adam-Bold.ttf"),
    LouisGeorgeCafeLight: require("./assets/fonts/Louis-George-Cafe-Light.ttf"),
    LouisGeorgeCafe: require("./assets/fonts/Louis-George-Cafe.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor={cores.dark} />
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: cores.dark }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "Produtos") {
              iconName = focused ? "shopping" : "shopping-outline";
            } else if (route.name === "Sobre") {
              iconName = focused
                ? "ellipsis-horizontal-circle-sharp"
                : "ellipsis-horizontal-circle-outline";
            } else if (route.name === "Perfil") {
              iconName = focused ? "person-sharp" : "person-outline";
            }

            if (route.name === "Produtos") {
              return <MaterialIcons name={iconName} size={size} color={color} />
            } else {
              return <Ionicons name={iconName} size={size} color={color} />
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: cores.title,
          inactiveTintColor: "#ffffff",
          keyboardHidesTabBar: true,
          style: { backgroundColor: "#000", borderTopColor: "#222" },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Produtos" component={ProdutosScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
