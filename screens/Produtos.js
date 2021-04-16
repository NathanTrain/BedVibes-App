import * as React from 'react';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, Dimensions, Image, Alert } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import {cores, theme} from '../Themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';

let widthWindow = Dimensions.get('window').width - 10;
let heightWindow = Dimensions.get('window').width - 10;

function Produtos({navigation}) {
  
  const [abas, setAbas] = useState([
    {
      name: 'Tudo',
      id: 0,
      active: true
    },
    {
      name: 'Novidades',
      id: 1,
      active: false
    },
    {
      name: 'Fronhas',
      id: 2,
      active: false
    },
    {
      name: 'Lençóis',
      id: 3,
      active: false
    },
    {
      name: 'Cobertas',
      id: 4,
      active: false
    },
  ])

  function nextAba(id){
    let newAbas = abas.map((val)=>{
      (val.id == id)
      ? val.active = true
      : val.active = false
      return val
    })
    setAbas(newAbas);
  }


  const [products, setProducts] = useState([
    {
      abaType: [2],
      title: 'Fronha Francesa',
      description:'descrição aqui\noutra linha aqui',
      materials: [{id:1, title:'Algodão'}, {id:2, title:'Seda'}, {id:3, title:'Fibra'}],
      image: {uri:'https://picsum.photos/300/250'}
    },
    {
      abaType: [1, 3],
      title: 'Lençol gotoso',
      description:'Aaaa \nsocorro \nmemata',
      materials: [{id:0, title:'Algodão'}, {id:1, title:'Seda'}],
      image: {uri:'https://picsum.photos/id/21/300/250'}
    },
    {
      abaType: [1, 4],
      title: 'Cobertor quentin hmm',
      description:'descrição aqui\noutra linha aqui',
      materials: [{id:0, title:'Algodão'}, {id:1, title:'Fibra'}],
      image: {uri:'https://picsum.photos/id/28/300/250'}
    },
    {
      abaType: [4],
      title: 'cobertor lindo',
      description:'Aaaa \nsocorro \nmemata',
      materials: [{id:0, title:'Seda'}, {id:1, title:'Fibra'}],
      image: {uri:'https://picsum.photos/id/27/300/250'}
    },
    {
      abaType: [3],
      title: 'Lençol lindo',
      description:'descrição aqui\noutra linha aqui',
      materials: [{id:0, title:'Algodão'}, {id:1, title:'Seda'}],
      image: {uri:'https://picsum.photos/id/24/300/250'}
    },
    {
      abaType: [1, 2],
      title: 'Fronha fofa',
      description:'Aaaa \nsocorro \nmemata',
      materials: [{id:0, title:'Seda'}, {id:1, title:'Fibra'}],
      image: {uri:'https://picsum.photos/id/25/300/250'}
    },
  ])

  useEffect(()=>{
    let newAbaType = [];
    products.map((val)=>{
      (val.abaType.includes(1))
      ? newAbaType.unshift(val)
      : newAbaType.push(val)
    })
    setProducts(newAbaType)
  }, []);


  return (
    <View style={{flex:1, backgroundColor:cores.dark}} >
      <View style={{flex:0.2, zIndex:50}} >
          <View style={{...theme.container, marginBottom:0}}>
            <Text style={theme.title}>Produtos</Text>
            <ScrollView horizontal indicatorStyle={'white'} style={{maxHeight:40}} >
              {
                abas.map((val)=>{
                  if (val.active){
                    return(
                      <TouchableOpacity>
                        <Text style={styles.rollSelected}>{val.name}</Text>
                      </TouchableOpacity>
                    );
                  } else {
                    return(
                      <TouchableOpacity onPress={()=>nextAba(val.id)} >
                        <Text style={styles.rollText}>{val.name}</Text>
                      </TouchableOpacity>
                )}})
              }
            </ScrollView>
          </View>
      </View>
      <View style={{flex:0.8, margin:10, marginTop:0}} >
        <ScrollView style={styles.itemsGroup} >
          <View style={styles.searchBtn} >
            <Ionicons name='search-outline' color='#fff2' size={25} />
            <TextInput placeholder='Buscar' placeholderTextColor='#fff2'
              style={{marginLeft:10, color:'white', width:'100%'}} />
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}} >

            {
              abas.map((val, index)=>{
                if (val.active) {
                  for (let i = 0; i <= 4; i++){
                    if (index == i) {
                      return(
                        products.map((valP)=>{
                          if (valP.abaType.includes(index)) {
                            if (index == 1){
                              return(
                                <ProductsView valP={valP} navigation={navigation} newest={false} />
                              )
                            } else {
                              return(
                                <ProductsView valP={valP} navigation={navigation} />
                              )
                            }
                          } else if (index == 0) {
                            return(
                              <ProductsView valP={valP} navigation={navigation} />
                )}}))}}}})
            }
            
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

function ModalProductScreen({route, navigation}){

  navigation.setOptions({title:route.params.title})

  const renderItem = ({item})=>{
    return(
      <View style={modalStyles.item} >
        <Ionicons name='arrow-forward-outline' size={20} color={'white'} />
        <Text style={modalStyles.itemText} >{item.title}</Text>
      </View>
    )
  }

  const [DATA, setDATA] = useState([]);

  useEffect(()=>{
    var data = [];
    route.params.materials.map((item)=>{
      data.push(item);
    })
    setDATA(data);
  }, []);

  const showAlert = ()=>{
    Alert.alert(
      //title
      'OPA!',
      // mensagem
      'Infelizmente não é possivel realizar um orçamento pois somos uma empresa fictícia.',
      [
        {
          text:'ata kk',
        }
      ]
    )
  }
  return(
    <View style={{flex:1}} >
      <Image source={route.params.image} style={modalStyles.image}  />
      <View style={modalStyles.container} >
        <ScrollView>
          <Text style={modalStyles.descriptionTitle} >Descrição:</Text>
          <Text style={modalStyles.description} >{route.params.description}</Text>
          <Text style={modalStyles.descriptionTitle} >Materiais:</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={modalStyles.list}
          />
          <TouchableOpacity onPress={()=>showAlert()} style={theme.button} >
            <Ionicons name='wallet-outline' size={26} color={'black'} /> 
            <Text style={theme.btnText} >Fazer orçamento!</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

function ProductsView({valP, navigation, newest=true}){
  return(
    <TouchableHighlight activeOpacity={90} onPress={() => navigation.navigate('Produto', {
      title: valP.title,
      description:valP.description,
      materials: valP.materials,
      image: valP.image
    })} >
      <View style={styles.item} >
        <View style={styles.whiteItem}>
          <Text style={styles.textInside} >{valP.title}</Text>
          {
            valP.materials.map((valM, indexM)=>{
              if (indexM < 2){
                return(
                  <Text style={styles.textInsideObs} >- {valM.title}</Text>
            )}})
          }
          <Text style={styles.insideBottomText} >{'Clique para\nver mais!'}</Text>
        </View>
        <View style={{flexDirection:'row'}} >
          <Image style={styles.image} source={valP.image} />
          {
            (valP.abaType.includes(1) && newest )
            ? <Text style={styles.newText} >NOVO!</Text>
            : <View />
          }
        </View>
      </View>
    </TouchableHighlight>
  )
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return(
    <MainStack.Navigator >
      <MainStack.Screen name="Produtos" component={Produtos} options={{headerShown:false}} />
    </MainStack.Navigator>
  )
}

function Root(){
  return(
    <RootStack.Navigator mode="modal"
      screenOptions={{
      headerStyle:{backgroundColor:cores.dark, borderBottomColor:'#555', borderBottomWidth:1},
      headerTitleStyle:{color:cores.title, fontSize:24, fontWeight:'normal', paddingRight:20},
      headerTitleAlign:'left', headerTintColor:cores.extra,
      headerPressColorAndroid:cores.extra}}  >
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Produto" component={ModalProductScreen} />
    </RootStack.Navigator>
  )
}
export default Root;

const modalStyles = StyleSheet.create({
  container:{
    backgroundColor:cores.dark, 
    flex:1, 
    padding:20, 
    paddingHorizontal:30
  },
  image:{
    width: widthWindow+10,
    height: heightWindow-150,
    paddingBottom:10,
  },
  descriptionTitle:{
    color:cores.title,
    fontSize:18,
  },
  description:{
    color:'white',
    marginLeft:25,
    marginBottom:15,
    fontSize:16
  },
  list:{
    marginLeft:25,
    marginBottom:20
  },
  item:{
    paddingBottom:8,
    flexDirection:'row',
  },
  itemText:{
    color:'white',
    fontSize:16,
    paddingLeft:5
  },
})

const styles = StyleSheet.create({
  image:{
    width: widthWindow - 320,
    height: heightWindow - 275,
    zIndex:10,
    resizeMode:'stretch', 
    borderRadius:4,
  },
  rollText:{
    color:'white',
    fontSize:18,
    marginVertical:5,
    paddingHorizontal:5,
  },
  rollSelected:{
    backgroundColor:'#fff2',
    color:'white',
    fontSize:18,
    marginVertical:5,
    paddingHorizontal:5,
  },
  searchBtn:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    alignSelf:'stretch',
    backgroundColor:'#222',
    marginTop: 10, marginBottom:20,
    marginHorizontal:30,
    padding:10,
    borderRadius:5
  },
  whiteItem:{
    position:'absolute',
    bottom: 0, right:0,
    width: 150, height:155,
    zIndex:9,
    backgroundColor:'#fff',
    borderRadius:7,
    padding:5,
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  itemsGroup:{
    marginHorizontal:10,
    flex:1,
  },
  item:{
    width:170,
    height:175,
    margin:5,
  },
  textInside:{
    fontSize:16,
    marginLeft:60,
    marginRight:5,
    marginBottom:3,
    textAlign:'left',
    maxHeight:45,
  },
  textInsideObs:{
    fontSize:13,
    marginLeft:60,
    marginRight:5,
    textAlign:'justify',
  },
  insideBottomText:{
    marginTop:5, borderRadius:25, bottom:-3,
    textAlign:'center',
    fontSize:16,
    backgroundColor:cores.extra,
    width:130,
    alignSelf:'center'
  },
  newText:{
    position:'absolute',
    backgroundColor:cores.title,
    textAlign:'center',
    fontWeight:'bold',
    height:30,
    width:widthWindow - 310,
    right:0, paddingBottom:10,
    borderTopRightRadius: 7
  }
})
  