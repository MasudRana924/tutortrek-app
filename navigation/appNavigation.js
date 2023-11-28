import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import TutorLoginScreen from '../screens/auth/teacherAuth/TutorLoginScreen';
import TutorSignupScreen from '../screens/auth/teacherAuth/TutorSignupScreen';
import MainScreen from '../screens/main/MainScreen';
import ProfileScreen from '../screens/profile/ProfileScreen'
import TeacherProfile from '../screens/profile/TeacherProfile';



const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="TutorLogin" options={{headerShown: false}} component={TutorLoginScreen} />
        <Stack.Screen name="TutorSignup" options={{headerShown: false}} component={TutorSignupScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="MainHome" options={{headerShown: false}} component={MainScreen} />
        <Stack.Screen name="MainProfile" options={{headerShown: false}} component={ProfileScreen} />
        <Stack.Screen name="TeacherProfile" options={{headerShown: false}} component={TeacherProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}