import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './main';
import RegisterScreen from './registerScreen';
import HomeScreen from './homeScreen';
import Driver from './driver';
import Vehicles from './vehicles';
import Trips from './trips';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Driver" component={Driver} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
        <Stack.Screen name="Trips" component={Trips} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
