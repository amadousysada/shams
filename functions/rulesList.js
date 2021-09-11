import React, { useState } from 'react';

import { Box, Center, Divider, FlatList, Heading,Text, VStack, StatusBar, HStack, View, Link, useDisclose} from 'native-base';

import { Dimensions, Image, Linking, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign} from "@expo/vector-icons"
import { MyStagger } from './stagger';

export const RulesList = ({data, action}) => {
    const [first, setFirst]=useState('francais')
    const [second, setSecond]=useState('pulaar')
    const [translate, setTranslate]=useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const { isOpen, onToggle } = useDisclose()

    

    return (
        <Center on>
        <MyStagger isOpen={isOpen} onToggle={onToggle}/>
        <HStack height={60} mx={2} alignItems="center" justifyContent="space-between" alignSelf="stretch" top={0}>
                <Text style={{fontWeight:'bold', fontSize:20, padding:10, width:'80%'}}>
                    Les 40 règles de Shams de Tabriz – Soufi mon Amour
                </Text>
                <Center borderRadius={10}>
                    <Entypo size={30} name='info-with-circle' onPress={onToggle}/>
                </Center>
        </HStack>
        <VStack space={2} alignItems="center" justifyContent="center" bg="transparent">
            <StatusBar backgroundColor='#D4DDE4' barStyle="dark-content" />
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                style={{maxHeight:Dimensions.get('window').height-110}}
                renderItem={({ item }) => (
                <Center
                    //rounded="md"
                    _text={{
                        color: "white",
                    }}
                    
                >
                    <TouchableOpacity onPress={()=>action(item)}>
                        <Box px={10} py={2} my={10} bg="white" borderRadius={10}>
                        {"Régle N°"+item.id}
                        </Box>
                    </TouchableOpacity>
                </Center>
                
                )}
                keyExtractor={(item) => ""+item.id}
                ItemSeparatorComponent={()=><Divider my={0} size={2} bg="black" />}
                
            />
        </VStack>
        <Box height={50}>
            <Text textAlign='center' style={styles.textStyle} >Puisse ces règles vous apporter plus d’amour dans votre vie.</Text>
        </Box>
        
         
        
                  
        </Center>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontVariant: ["small-caps","oldstyle-nums",],
        fontWeight:'bold',
        fontStyle:'italic',
        textShadowRadius:30
    }
})