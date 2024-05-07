import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Details from './screens/Details'
import Home from './screens/Home'

export type RootStackParamList= {
  Home: undefined;
  Details: {product: Product}
}

const Stack= createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title:"Trending Products"
        }} />
        <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title:"Product Details"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App