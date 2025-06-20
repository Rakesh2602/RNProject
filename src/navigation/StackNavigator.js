import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CounterScreen from '../screens/CounterScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import DashBoard from '../screens/DashBoard';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="DashBoard"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
