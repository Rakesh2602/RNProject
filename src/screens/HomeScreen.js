import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' },
    { id: '4', name: 'David' },
    { id: '5', name: 'Eva' },
    { id: '6', name: 'Farhan' },
    { id: '7', name: 'George' },
    { id: '8', name: 'Hema' },
    { id: '9', name: 'Ivy' },
    { id: '10', name: 'John' },
  ];

  const renderItem = ({ item }) => {
    console.log(item, '34442');
    return (
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: 'yellow',
          width: '100%',
          height: 30,
        }}
        onPress={() => navigation.navigate('Profile', { datas: item })}
      >
        <Text
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      <FlatList data={users} renderItem={renderItem} />
      <View>
      <Button title="CounterScreen" onPress={() => navigation.navigate('Counter')} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
