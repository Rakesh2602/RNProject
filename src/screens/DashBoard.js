import { View, Text, Image, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';

const DashBoard = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login')
        },2000)
    })
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <Image
        source={require('../assets/AppLogo.png')}
        style={{
          flex: 1,
          height:'100%',
          width:'100%',
          resizeMode:'contain'
        }}
        resizeMode='contain'
      />
    </SafeAreaView>
  );
};

export default DashBoard;
