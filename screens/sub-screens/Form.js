import * as React from "react";
import { View, TextInput, StyleSheet, Image, Text, Alert } from "react-native";
import { withFormik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";

import { cores } from "../../Themes";

const myAlert = (title, msg, btn) => {
  Alert.alert(title, msg, [
    {
      text: btn,
      style: "cancel",
    },
  ]);
};

const Form = (props) => {
  const [lock, setLock] = useState(true);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  function switchPassword(lockKey) {
    setLock(lockKey);
  }

  return (
    <View style={styles.container}>
      {/* * email input */}
      <Text style={styles.informationText}>E-mail:</Text>
      <TextInput
        keyboardType="email-address"
        autoCompleteType="email"
        style={styles.input}
        value={props.values.email}
        onChangeText={(text) => props.setFieldValue("email", text)}
      />

      {/* * password input */}
      <Text style={styles.informationText}>Senha:</Text>
      <View
        style={{
          ...styles.input,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {lock.valueOf() ? (
          <TextInput
            secureTextEntry={true}
            style={{
              color: "white",
              flex: 1,
              marginRight: 8,
            }}
            value={props.values.password}
            onChangeText={(text) => props.setFieldValue("password", text)}
          />
        ) : (
          <TextInput
            secureTextEntry={false}
            style={{
              color: "white",
              flex: 1,
              marginRight: 8,
            }}
            value={props.values.password}
            onChangeText={(text) => props.setFieldValue("password", text)}
          />
        )}

        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={() => switchPassword(!lock)}
        >
          {lock.valueOf() ? (
            <Image
              source={require("../../assets/icons/Mostrar.png")}
              style={{ width: 25, height: 25 }}
            />
          ) : (
            <Image
              source={require("../../assets/icons/Ocultar.png")}
              style={{ width: 25, height: 25 }}
            />
          )}
        </TouchableOpacity>
      </View>

      {/* * save information on app */}
      <View style={styles.remember}>
        <CheckBox
          tintColors={{ true: cores.extra, false: cores.extra }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={styles.checkRemember}>Manter conectado</Text>
      </View>

      {/* * submit button */}
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={styles.submit} onPress={props.handleSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>
      </View>

      {/* * forgot password button */}
      <View style={{ marginTop: 25, alignItems: "flex-start" }}>
        <TouchableOpacity
          onPress={() => {
            myAlert(
              "Eita",
              "Parece que essa função ainda não foi incluida...",
              "Oh, ok"
            );
          }}
          style={styles.forgotPassword}
        >
          <Ionicons name="lock-closed-outline" size={15} color={cores.extra} />
          <Text style={styles.textFP}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  informationText: {
    color: "white",
    fontFamily: "Adam",
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    marginBottom: 20,
    padding: 5,
    paddingHorizontal: 10,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
  },
  submit: {
    backgroundColor: cores.extra,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  submitText: {
    color: "black",
    fontFamily: "Adam",
    fontSize: 15,
  },
  remember: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkRemember: {
    color: "white",
    fontSize: 12,
    fontFamily: "Adam",
    marginTop: 2,
  },
  forgotPassword: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-start",
  },
  textFP: {
    color: cores.extra,
    fontSize: 12,
    fontFamily: "Adam",
    marginLeft: 2.5,
  },
});

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),

  handleSubmit: (values) => {
    myAlert("Calma ai", "Ainda não podemos criar sua conta, lamentamos o inconveniente", "Fazer o que...")
  },
})(Form);
