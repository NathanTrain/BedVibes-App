import * as React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "../Themes";
import * as WebBrowser from "expo-web-browser";

export default function Sobre() {
  let widthWindow = Dimensions.get("window").width - 10;
  let heightWindow = Dimensions.get("window").width - 10;

  const openBrownser = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://www.instagram.com/bedvibestextil"
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ ...theme.container, paddingHorizontal: 30 }}>
          <Text style={{ ...theme.title, marginLeft: 0 }}>Sobre nós!</Text>
          <Image
            style={{
              width: widthWindow - 70,
              height: heightWindow - 70,
              alignSelf: "center",
              borderWidth: 5,
              borderColor: "white",
              marginVertical: 10,
            }}
            source={require("../assets/logo.jpeg")}
          />
          <Text style={theme.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sapien leo, scelerisque ac posuere eget, eleifend ac nulla. Aliquam
            erat volutpat. Integer mollis fringilla ipsum, sed fringilla metus
            finibus eu. Cras fermentum lorem sed justo sodales, in malesuada
            metus malesuada. Etiam facilisis, orci ac venenatis ullamcorper,
            libero tellus consectetur ipsum, quis tincidunt tellus risus at
            libero. Vivamus ullamcorper est ac eros consectetur iaculis. Nulla
            tincidunt lobortis nunc vel tincidunt. Quisque tincidunt magna sed
            turpis hendrerit pulvinar. Curabitur pellentesque nisi non velit
            elementum congue. Aenean vel metus turpis. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => openBrownser()}
              style={theme.button}
            >
              <Ionicons name={"logo-instagram"} size={26} color="#000" />
              <Text style={theme.btnText}>Instagram</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
