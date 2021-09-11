import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import data from './data.json';
import { NativeBaseProvider, FlatList, Box, Center, VStack, Heading, Divider, HStack, Modal } from 'native-base';
import { MyCustomModal, RulesList } from './functions';


export default function App() {

  const [appIsReady, setAppIsReady] = useState(false)
  const [selectedItem, setSelectedItem]=useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const onPress = (item)=>{
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  return (
    
    <NativeBaseProvider>
      <ImageBackground source={require("./assets/shams-roundcorner.png")} resizeMode="cover" style={{width:'100%', flex:1}}>

      {
        !showModal?
        (
          <Center
            onLayout={onLayoutRootView}
          >   
            <RulesList data={data} action={onPress}/>
          </Center>
        ):
        null
      }
      
      <MyCustomModal data={selectedItem} showModal={showModal} setShowModal={setShowModal} />
      </ImageBackground>
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});