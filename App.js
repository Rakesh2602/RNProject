import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {CounterProvider} from './src/context/ContextApi';

const App = () => {
  return (
    <CounterProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </CounterProvider>
  );
};

export default App;
