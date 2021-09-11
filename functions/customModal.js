import React from "react"
import { Text, Heading, Modal, IconButton } from 'native-base'
import { MyStagger } from "./stagger"
import { Dimensions, ImageBackground, Share, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialCommunityIcons, FontAwesome} from "@expo/vector-icons"

const topPaddingValue = Dimensions.get("screen").height/4
const bottomPaddingValue = Dimensions.get("screen").height/4

export const MyCustomModal = ({data, showModal, setShowModal}) => {

    

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

        <Modal
            size={'100%'}
            isOpen={showModal}
            onClose={() => setShowModal(!showModal)}
            bg="transparent"
            
        >
          <Modal.Content bg="transparent" minHeight="100%" minWidth="100%" paddingLeft={0} paddingRight={0}>
            <Modal.CloseButton my={2} bg="red.500"/>
            <Modal.Header paddingLeft ={2}>
                
                    <Heading>{data && "Régle N°"+data.id}</Heading>
                
            </Modal.Header>
            <Modal.Body  justifyContent='center' alignItems='center'  padding={0}>
                        
                <Text style={styles.textStyle}
                >
                    {data && data.content}
                </Text>
                <TouchableOpacity onPress={share} style={{flexDirection:'row',backgroundColor:'white', alignItems:'center', borderRadius:10, width:150}}>
                    <IconButton
                                variant="unstyled"
                                rounded="full"
                                icon={<MaterialCommunityIcons size={24} name="share" />}
                    />
                    <Text style={{textAlign:'center',color:'black',fontWeight:'bold', textAlignVertical:'center'}}>Partager</Text>
                </TouchableOpacity>
                
                {/*<MyStagger />*/}
            </Modal.Body>
            
          </Modal.Content>
        </Modal>
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
    }
})