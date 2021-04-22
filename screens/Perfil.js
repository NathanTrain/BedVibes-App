import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "../Themes";

export default function Perfil() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View style={theme.container}>
          <Text style={theme.title}>Perfil!</Text>
        </View>
      </ScrollView>
    </View>
  );
}
