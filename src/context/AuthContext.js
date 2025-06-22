import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from '@react-native-firebase/auth';
import {appleAuth} from '@invertase/react-native-apple-authentication';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '14355472481-l0q1tlodb0d49fg0qvdq4birdsk5uo98.apps.googleusercontent.com',
      offlineAccess: true,
    });

    const loadFromStorage = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedUser) setUser(JSON.parse(storedUser));
      if (storedTheme) setTheme(storedTheme);
    };

    loadFromStorage();
  }, []);

  const appleLogin=async ()=>{
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    console.log("apple===>", appleAuthRequestResponse)
    // this.setState({appleTkn:appleAuthRequestResponse.identityToken,
    // AppleAuthId:appleAuthRequestResponse.authorizationCode})
    // console.log("ssdfsdf====", this.state.appleTkn)
   // this.AppleApiCall() 
  }

  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
      await signInWithCredential(getAuth(), googleCredential);
      setUser(userInfo);
      await AsyncStorage.setItem('user', JSON.stringify(userInfo));
      return true; // ✅ tell caller it worked
    } catch (error) {
      console.error('Google Sign-In error:', error);
      return false; // ❌ login failed
    }
  };
  
  

  const logout = async () => {
    setUser(null);
    await GoogleSignin.signOut();
    await AsyncStorage.removeItem('user');
  };

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <AuthContext.Provider
      value={{ user, loginWithGoogle, logout, theme, toggleTheme,appleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
