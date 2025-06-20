// screens/CounterScreen.js
import React, { useContext, useState,useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CounterContext } from '../context/ContextApi';
import AsyncStorage from '@react-native-async-storage/async-storage'
const CounterScreen = () => {

  const [counted, setCounted] = useState(0);

  const { state, dispatch } = useContext(CounterContext);
const isLightTheme = state.theme === 'light';
const textColor = { color: isLightTheme ? '#000' : '#fff' };
const backgroundColor = { backgroundColor: isLightTheme ? 'black' : '#000' };

  const dec = () => {
    setCounted(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor:backgroundColor },
      ]}
    >
      <Text style={[styles.header, { color: textColor }]}>
        useState Counter
      </Text>
      <Button title="Increment" onPress={() => setCounted(counted + 1)} />
      <Text style={styles.countText}>{counted}</Text>
      <Button title="Decrement" onPress={dec} />
      <Button title="Reset" onPress={() => setCounted(0)} />

      <View style={styles.divider} />

      <Text style={[styles.header, { color: isLightTheme ? '#000' : '#fff' }]}>
        useReducer Counter (Context)
      </Text>
      <Button title="Reducer Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Text style={styles.countText}>{state.counter}</Text>
      <Button title="Reducer Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} />
      <Button title="Reducer Reset" onPress={() => dispatch({ type: 'RESET' })} />
      <Button title="Toggle Theme" onPress={() => dispatch({ type: 'TOGGLE_THEME' })} />
      <Text style={{ marginTop: 10, color: isLightTheme ? '#000' : '#fff' }}>
        Current Theme: {state.theme}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  countText: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  divider: {
    height: 2,
    marginVertical: 20,
    backgroundColor: '#ccc',
  },
});

export default CounterScreen;
