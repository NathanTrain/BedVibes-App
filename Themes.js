import { StyleSheet } from 'react-native';

const cores = {
    dark: '#0c0907',
    extra: '#1cc2ff',
    title: '#fff21c',
    white: '#ffffff',
}

const theme = StyleSheet.create({
    container:{
        flex:1, flexDirection:'column',
        paddingHorizontal:10,
        margin:10,
    },
    title:{
        marginLeft:30,
        color: cores.title,
        fontSize: 40,
        marginVertical:10,
    },
    text:{
        color:cores.white,
        fontSize:17,
        marginVertical:10,
        textAlign:'justify',
    },
    button:{
        flex:1, flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        backgroundColor: cores.extra,
        padding:15,
        borderRadius:20,
        marginHorizontal:20,
        marginBottom:20,
    },
    btnText:{
        color:'#000',
        fontSize:22,
        marginLeft:5,
    }

})



export {cores, theme};
