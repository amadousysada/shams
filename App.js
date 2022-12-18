import React, {  useState, createContext } from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/DetailScreen';
import { AppCtx } from './utils';

const Stack = createNativeStackNavigator();

export default function App() {
  const [selectedIndex, setSelectedIndex]=useState(-1)

  const appContext = React.useMemo(
    () => ({
        setIndex: (index) => {
          setSelectedIndex(index)
        },
        getIndex: () => {
          return selectedIndex
        }
    }),
    [selectedIndex]
 );

  return (
    <AppCtx.Provider value={appContext}>
      <NativeBaseProvider>
        <NavigationContainer style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </AppCtx.Provider>
    
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