import React from 'react';
import { ImageBackground } from 'react-native';
import { Center } from 'native-base';
import { RulesList } from '../functions';
import data from '../data.json'

export const HomeScreen = ({navigation}) => {
    const onPress = (item, index)=>{
      navigation.navigate('Detail', {data: data[index]})
    }
    return (
      <ImageBackground source={require("../assets/shams-roundcorner.png")} resizeMode="cover" style={{width:'100%', flex:1}}>
        <Center>   
          <RulesList data={data} action={onPress}/>
        </Center>
      </ImageBackground>
    );
}