import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../Themes";
import Form from "./sub-screens/Form.js";

let windowWidth = Dimensions.get("window").width - 10;

function LogIn() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ margin: 5, flex: 1 }}
    >
      <View style={theme.container}>
        <View style={styles.logoLine}>
          <Image
            source={require("../assets/icons/logoBonita.png")}
            width={1}
            height={1}
            style={styles.logo}
          />
          <LinearGradient
            colors={["#fffd", "transparent"]}
            end={[1, 0]}
            locations={[0.1, 1]}
            style={styles.line}
          />
        </View>

        <View style={styles.loginBox}>
          <View style={loginStyles.title}>
            <Text style={loginStyles.principalText}>Bem-vindo a BedVibes!</Text>
            <Text style={loginStyles.subText}>
              Preencha os campos abaixo para acessar sua conta:
            </Text>
          </View>
          <Form />
          <View></View>
        </View>

        <View style={styles.logoLine}>
          <LinearGradient
            colors={["#fffd", "transparent"]}
            start={[1, 0]}
            locations={[0.1, 1]}
            style={{ ...styles.line, width: windowWidth - 85 }}
          />
          <MaterialCommunityIcons
            name="moon-waxing-crescent"
            size={40}
            color="yellow"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default function Perfil() {
  return (
    <View style={{ flex: 1 }}>
      <LogIn />
    </View>
  );
}

const styles = StyleSheet.create({
  logoLine: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  line: {
    width: windowWidth - 100,
    height: 3,
    borderRadius: 1.25,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  loginBox: {
    flex: 0.6,
    padding: 10,
  },
});

const loginStyles = StyleSheet.create({
  title: {},
  principalText: {
    color: "white",
    fontFamily: "Adam",
    fontSize: 35,
    marginBottom: 5,
  },
  subText: {
    color: "white",
    fontFamily: "Adam",
    fontSize: 15,
    marginBottom: 35,
  },
});
