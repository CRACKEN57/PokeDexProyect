
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreens from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'


const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Iniciar sesión" }} />
      <Stack.Screen name="Home" component={HomeScreens} />
    </Stack.Navigator>
  )
}

export default StackNavigator