import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import React, { useState } from 'react';

const Login = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <Image
          resizeMode="contain"
          source={require('../assets/AppLogo.png')}
          style={{
            height: 300,
            width: 300,
            justifyContent: 'center',
            resizeMode: 'contain',
            marginLeft: 30,
          }}
        />
        <View style={{ marginTop: 30 }}>
          <TextInput
            placeholder="Enter email ID"
            style={styles.input}
            value={email}
            onChangeText={text => SetEmail(text)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="Enter password"
            style={styles.input}
            value={password}
            onChangeText={text => SetPassword(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <TouchableOpacity>
            <Text style={{fontSize:16}}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize:16,color:'red'}}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
        <View style={styles.borderMainView}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey' }} />
          <Text style={{ marginHorizontal: 10 }}>or</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey' }} />
        </View>
        <View style={styles.socialLoginsView}>
          <TouchableOpacity>
            <Image
              source={require('../assets/googleIcon.png')}
              resizeMode="contain"
              style={styles.googleIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/appleIcon.png')}
              resizeMode="contain"
              style={styles.googleIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/faceBookIcon.png')}
              resizeMode="contain"
              style={styles.googleIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/twitterIcon.png')}
              resizeMode="contain"
              style={styles.googleIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',marginTop:30,justifyContent:'center'}}>
        <Text style={{fontSize:16}}>Don't have an account?</Text>
        <TouchableOpacity>
            <Text style={{fontSize:18,fontWeight:'bold',color:'red'}}> Signup</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    width: 350,
    backgroundColor: 'lightgrey',
    paddingLeft: 30,
    borderRadius: 20,
   fontSize:16
  },
  borderMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  googleIcon: {
    height: 30,
    width: 30,
    borderRadius: 20,
  },
  socialLoginsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  loginButton: {
    height: 50,
    backgroundColor: 'skyblue',
    marginHorizontal: 10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:40,
    marginTop:30
  },
});
