import React, { useContext } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { AuthContext } from '../contexts/AuthContext';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MatchScreen from '../screens/MatchScreen';
import ChatScreen from '../screens/ChatScreen';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  Profile: undefined;
  Match: undefined;
  Chat: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: '#FF4B4B', // Use your primary color here
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Match" component={MatchScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      ) : (
        <>
          <Stack.Screen 
            name="SignIn" 
            component={SignInScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen} 
            options={{ headerShown: false }} 
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;