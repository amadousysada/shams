import React from "react"
import { Heading, IconButton, View } from 'native-base'
import { Dimensions, ImageBackground, Share, StyleSheet, TouchableOpacity, Text } from "react-native"
import { MaterialCommunityIcons} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Platform } from "react-native"

const topPaddingValue = Dimensions.get("screen").height/4

export const MyCustomModal = ({data}) => {

    const navigation = useNavigation()
    const share =async () => {
        try {
          const result = await Share.share({
            message:
              `<< ${data && data.content}>>\n~ Shams al-Din Mohammad Tabrizi ~
              `,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    }

    return (
        <ImageBackground source={require("../assets/shams-roundcorner.png")} resizeMode="cover" style={{width:'100%', flex:1}}>
        <View bg="transparent" pt={Platform.OS=="ios"?5:0}>
          <View bg="transparent" minHeight="100%" minWidth="100%" paddingLeft={0} paddingRight={0}>
            <View padding={2} paddingTop={7} style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Heading>{data && "Régle N°"+data.id}</Heading>
              <IconButton
                variant="subtle"
                rounded="2xl"
                bg={'red.500'}
                onPress={()=>navigation.goBack()}
                icon={<MaterialCommunityIcons size={15} name="close" color='white' />}
              />
            </View>
            <View justifyContent='center' alignItems='center'  padding={0}>    
                <Text style={styles.textStyle}
                >
                    {data && data.content}
                </Text>
                <TouchableOpacity onPress={share} style={{flexDirection:'row',backgroundColor:'white', alignItems:'center', borderRadius:10, width:150}}>
                    <IconButton
                      variant="unstyled"
                      rounded="full"
                      icon={<MaterialCommunityIcons size={24} name="share" color="black" />}
                    />
                    <Text style={{textAlign:'center', fontWeight:'bold', textAlignVertical:'center'}}>Partager</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontVariant: ["oldstyle-nums",],
        fontWeight:'bold',
        fontStyle:'italic',
        textShadowRadius:30,

        textAlign:'center',
        margin:20,
        marginTop: topPaddingValue,
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        borderRadius:10,
        color:'white',
        padding:20
    }
})