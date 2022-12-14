import React from 'react';

import { Box, Center, Divider, FlatList, Text, VStack, StatusBar, HStack, useDisclose} from 'native-base';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo} from "@expo/vector-icons"
import { MyStagger } from './stagger';
import { AppCtx } from '../utils';
import { Platform } from 'react-native';

export const RulesList = ({data, action}) => {
    const { isOpen, onToggle } = useDisclose()
    context = React.useContext(AppCtx)

    const onClick = (item, index)=>{
        context.setIndex(index)
        action(item, index)
    }

    return (
        <Center pt={Platform.OS=="ios"?10:0}>
        <MyStagger isOpen={isOpen} onToggle={onToggle}/>
        <HStack height={"10%"} mx={2} alignItems="center" justifyContent="space-between" alignSelf="stretch" top={0}>
            <Text style={{fontWeight:'bold', fontSize:20, padding:10, width:'80%'}}>
                Les 40 règles de Shams de Tabriz – Soufi mon Amour
            </Text>
            <Center borderRadius={10}>
                <Entypo size={30} name='info-with-circle' onPress={onToggle}/>
            </Center>
        </HStack>
        <VStack height={"80%"} space={1} alignItems="center" justifyContent="center" bg="transparent">
            <StatusBar backgroundColor='#D4DDE4' barStyle="dark-content" />
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                style={{maxHeight:Dimensions.get('window').height-110}}
                renderItem={({ item, index }) => (
                <Center
                    _text={{
                        color: "white",
                    }}
                    
                >
                    <TouchableOpacity onPress={()=>onClick(item, index)}>
                        <Box px={10} py={2} my={7} bg={context.getIndex()==index? "green.400":"white"} borderRadius={10}>
                        {"Régle N°"+item.id}
                        </Box>
                    </TouchableOpacity>
                </Center>
                )}
                keyExtractor={(item) => ""+item.id}
                ItemSeparatorComponent={()=><Divider my={0} size={1} bg="transparent" />}
            />
        </VStack>
        <Box height={"10%"} justifyContent="flex-end" bottom={Platform.OS=="ios"?8:0}>
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