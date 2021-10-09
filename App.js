import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import { StateProvider } from './contexts/StateContext';


import { Login, Preload, Restaurant, OrderDelivery, User, Cart, Register, Politica } from './screens'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }
    
    
      return (
        <StateProvider>
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'Preload'}
              >
                  <Stack.Screen name="Home" component={Tabs} />
                  <Stack.Screen name="Preload" component={Preload} />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Register" component={Register} />
                  <Stack.Screen name="User" component={User} />
                  <Stack.Screen name="Politica" component={Politica} />
                  {/* <Stack.Screen name="Cart" component={Tabs} /> */}
                  <Stack.Screen name="Restaurant" component={Restaurant} />
                  <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
              </Stack.Navigator>
          </NavigationContainer>
          </StateProvider>
      )
    
}

export default App;