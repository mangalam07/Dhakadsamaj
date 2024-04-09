import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import SureName from './src/screens/SureName';
import CastDetails from './src/screens/CastDetails';
import FamilyDetails from './src/screens/FamilyDetails';
import { StatusBar } from 'react-native';
import MemberDetails from './src/screens/MemberDetails';
import Developer from './src/screens/Developer';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <StatusBar hidden />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash@screen" component={SplashScreen} />
        <Stack.Screen name="Sure@name" component={SureName} />
        <Stack.Screen name="cast@details" component={CastDetails} />
        <Stack.Screen name="family@details" component={FamilyDetails} />
        <Stack.Screen name="member@details" component={MemberDetails} />
        <Stack.Screen name="developer@details" component={Developer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

{/* <Stack.Screen name="header" component={Header} /> */}