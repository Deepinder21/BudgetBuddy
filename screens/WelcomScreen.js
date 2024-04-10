import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native'

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import { auth } from '../configuration/firebase'

// Somewhere in your code

GoogleSignin.configure({
  webClientId: '1087326471215-v45mh3q8d2j696nuc7k3ukue54ua2obd.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  
});


export default function WelcomeScreen() {
    const navigation = useNavigation();

    const signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const {idToken} = await GoogleSignin.signIn();
        const googleCredentials = GoogleAuthProvider.credential(idToken);
        await signInWithCredential(auth, googleCredentials);
      } catch (error) {
        console.log('got error: ',error.message);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
            <Image source={require('../assets/images/OIP.jpeg')} className="w-60 h-60" />
        </View>
        <View className="mx-5 mb-20">
            <Text className={"text-center font-bold text-4xl text-blue-900 mb-10"}>Budget Buddy</Text>
            
            <TouchableOpacity onPress={()=> navigation.navigate('SignIn')} className="shadow p-3 rounded-full mb-5" style={{backgroundColor: colors.button}}>
                <Text className="text-center text-white text-lg font-bold">Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')} className="shadow p-3 rounded-full mb-5" style={{backgroundColor: colors.button}}>
                <Text className="text-center text-white text-lg font-bold">Sign Up</Text>
            </TouchableOpacity>

        </View>
      </View>
    </ScreenWrapper>
  )
}