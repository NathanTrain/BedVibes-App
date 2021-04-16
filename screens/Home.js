import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {cores, theme} from '../Themes';

export default function Home(props) {

    return (
        <View style={{flex:1}} >
            <ScrollView contentContainerStyle={{padding:10}} >
                <View style={theme.container}>
                    <Text style={theme.text}>Home!</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1, flexDirection:'column'
    },
  })
  