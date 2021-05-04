import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import { cores } from "../../Themes";

function ProductScreen({ route, navigation }) {
  const { screenName, itens } = route.params;
  const [modalVisibel, setModalVisibel] = useState(false);
  const [modalItem, setModalItem] = useState([]);
  const [selectedColor, setSelectedColor] = useState();

  navigation.setOptions({ title: screenName });

  return (
    <View style={styles.container}>
      {/* Modal view */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibel}
        onRequestClose={() => setModalVisibel(!modalVisibel)}
      >
        <View style={modalStyles.centeredView}>
          <ModalInsider
            item={modalItem}
            modalVisibel={modalVisibel}
            setModalVisibel={setModalVisibel}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            cart={route.params.cart}
            setCart={route.params.setCart}
          />
        </View>
      </Modal>

      {/* Products list */}
      <View style={styles.insider}>
        {itens.map((item) => {
          const { productName, preco, image } = item;
          return (
            <TouchableOpacity
              onPress={() => {
                setModalItem(item);
                setModalVisibel(!modalVisibel);
              }}
              activeOpacity={0.7}
              style={styles.box}
            >
              {/* image */}
              <Image style={{ width: 125, height: 125 }} source={image} />

              {/* title */}
              <Text style={styles.title}>{productName}</Text>

              {/* $$$ */}
              <Text
                style={{ ...styles.title, fontSize: 14, fontFamily: "Adam" }}
              >
                R$ {preco}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

function ModalInsider({
  item,
  modalVisibel,
  setModalVisibel,
  selectedColor,
  setSelectedColor,
  cart,
  setCart,
}) {

  const { productName, preco, cores, image } = item;

  function addToCart(){
    item.color = selectedColor;
    let newCart = cart
    newCart.push(item)
    setCart(newCart)
    setModalVisibel(false);
    Alert.alert(
      "SUCESSO!",
      "Seu item foi adicionado ao carrinho!",
      [
        {
          text:"Obrigado!",
          style:"cancel"
        }
      ]
    );
  }

  return (
    <View style={modalStyles.modalView}>
      {/* header */}
      <View style={modalStyles.header}>
        <TouchableOpacity
          style={modalStyles.closeBtn}
          onPress={() => setModalVisibel(!modalVisibel)}
        >
          <Ionicons name="close-circle-outline" size={25} color={"white"} />
        </TouchableOpacity>
        <Text style={modalStyles.title}>{productName}</Text>
      </View>

      {/* image */}
      <View style={modalStyles.imageBackground}>
        <Image style={modalStyles.image} source={image} />
        <Text style={modalStyles.imageText}>Imagem ilustrativa</Text>
      </View>

      {/* picker */}
      <View style={modalStyles.pickerView}>
        <Picker
          mode="dropdown"
          style={modalStyles.picker}
          selectedValue={selectedColor}
          onValueChange={(val) => setSelectedColor(val)}
        >
          {cores.map((color) => {
            return (
              <Picker.Item
                label={color}
                value={color}
                fontFamily="LouisGeorgeCafe"
              />
            );
          })}
        </Picker>
      </View>

      {/* descrição */}
      <View style={modalStyles.description}>
        <Text style={modalStyles.descriptionText}>descrição</Text>
      </View>

      {/* preço */}
      <View style={modalStyles.prize}>
        <Text style={modalStyles.prizeText}>R$ {preco}</Text>
      </View>

      {/* 'add to cart' button */}
      <View style={modalStyles.addToCartView}>
        <TouchableOpacity onPress={()=> addToCart()} activeOpacity={0.5} style={modalStyles.addToCartBtn} >
          <Ionicons name="cart-outline" size={25} color="white" />
          <Text style={modalStyles.addToCartText} >Adicionar ao carrinho!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    padding: 50,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#0009",
  },
  modalView: {
    backgroundColor: cores.dark,
    borderColor: "white",
    borderWidth: 0.75,
    borderRadius: 30,
    padding: 20,
    flex: 0.7,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  header: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingBottom: 10,
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
  },
  closeBtn: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  title: {
    color: "white",
    fontFamily: "LouisGeorgeCafe",
    textAlign: "center",
    fontSize: 20,
  },
  imageBackground: {
    backgroundColor: "white",
    marginVertical: 15,
    marginHorizontal: 20,
    flex: 0.25,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 175,
    margin: 20,
  },
  imageText: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 2.5,
    fontFamily: "Adam",
    fontSize: 12,
  },
  pickerView: {
    flex: 0.1,
    justifyContent: "space-around",
    alignItems: "stretch",
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 10,
  },
  picker: {
    margin: 15,
    padding: 20,
  },

  description: {
    marginVertical: 5,
    marginHorizontal:10,
    flex: 0.2,
  },
  descriptionText: {
    color: "white",
    textAlign: "justify",
  },
  prize: {
    marginVertical: 5,
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  prizeText: {
    color: "white",
    fontSize: 23,
    fontFamily: "Adam",
  },
  addToCartView: {
    marginVertical: 5,
    flex: 0.15,
    justifyContent:"center",
    alignItems:"stretch"
  },
  addToCartBtn:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor:cores.extra,
    padding:20,
    borderRadius:20,
    marginHorizontal:10,
    marginTop: 5
  },
  addToCartText:{
    color:"white",
    fontFamily:"Adam",
    fontSize: 16
  },
});

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
    fontFamily: "LouisGeorgeCafe",
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default ProductScreen;
