import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Center } from 'native-base';
import { RulesList } from '../functions';
import data from '../data.json'
import { MyCustomModal } from '../functions';

export const DetailScreen = ({navigation, route}) => {

    const {data} = route.params
    const onPress = (item)=>{
      setSelectedItem(item)
      setShowModal(!showModal)
    }
    return (
      <ImageBackground source={require("../assets/shams-roundcorner.png")} resizeMode="cover" style={{width:'100%', flex:1}}>
        <MyCustomModal data={data} />
      </ImageBackground>
    );
}