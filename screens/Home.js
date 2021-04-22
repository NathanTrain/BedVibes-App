import * as React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "../Themes";

export default function Home(props) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View style={theme.container}>
          <Text style={theme.text}>Home!</Text>
        </View>
      </ScrollView>
    </View>
  );
}
