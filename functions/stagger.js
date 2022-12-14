import React from "react"

import { Box, Divider, Stagger, VStack} from 'native-base';
import { AntDesign,Entypo} from "@expo/vector-icons"
import { Image, Linking, StyleSheet, View } from "react-native";


export const MyStagger = ({isOpen, onToggle}) => {
    
    
    const openLinkdin = ()=>{
        Linking.openURL("https://www.linkedin.com/in/amadou-sy-979488112/")
    }

    const opentwitter = ()=>{
        Linking.openURL('https://twitter.com/amssy_sy')
    }

    return (
      
            <Box
                style={{
                    backgroundColor: isOpen ? 'white':'transparent',
                    zIndex:1,
                    position:'absolute',
                    right:0,
                    padding:10,
                    borderRadius:20
                }}
            >
                <Box alignItems="center">
                    <Stagger
                        visible={isOpen}
                        space={20}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            translateY: 34,
                        }}
                        animate={{
                        translateY: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                            type: "timing",
                            mass: 1,
                            stagger: {
                                offset: 30,
                                reverse: true,
                            },
                        },
                        }}
                        exit={{
                        translateY: 34,
                        scale: 0.5,
                        opacity: 0,
                        transition: {
                            duration: 100,
                            stagger: {
                            offset: 30,
                            reverse: true,
                            },
                        },
                        }}
                    >
                        <VStack alignItems='center' space={5}>
                            
                            <View style={styles.profile}>
                                <Image source={require("../assets/profile.jpeg")} style={styles.img} />
                            </View>
                            <Divider  size={5} bg='transparent'/>
                            <Entypo name='linkedin-with-circle' size={40} color='#0077b5' onPress={openLinkdin} />
                                
                            {/*<Entypo name='twitter-with-circle' size={40} color='#1DA1F2' onPress={opentwitter} />
                            <Divider  size={5} bg='transparent'/>*/}
                        </VStack>
                        <AntDesign onPress={onToggle} name='closecircle' color='red' size={40} style={{marginTop:20}} />
                    </Stagger>
                </Box> 
    </Box>
    )
  }

  const styles = StyleSheet.create({
    
    profile:{
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:50,
        height:50,
        borderRadius:25,
    },
    socios:{
        flexDirection:'row',
    }
})