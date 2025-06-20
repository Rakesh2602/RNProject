import { View, Text,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const ProfileScreen = ({ route }) => {
  const { datas } = route.params;

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Text>ID: {datas.id}</Text>
      <Text>Name: {datas.name}</Text>
    </View>
  );
};

export default ProfileScreen