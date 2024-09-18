import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthContext } from '../contexts/AuthContext';
import Button from '../components/Button';
import FadeInView from '../components/FadeInView';
import { RootStackParamList } from '../navigation/AppNavigator';
import { globalStyles } from '../utils/theme';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <FadeInView style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome, {user?.name || 'User'}!</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Start Matching" onPress={() => navigation.navigate('Match')} />
      <Button title="View Chats" onPress={() => navigation.navigate('Chat')} />
      <Button title="Logout" onPress={logout} />
    </FadeInView>
  );
};

export default HomeScreen;