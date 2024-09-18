import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthContext } from '../contexts/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
import FadeInView from '../components/FadeInView';
import { RootStackParamList } from '../navigation/AppNavigator';
import { globalStyles } from '../utils/theme';

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSignIn = () => {
    // In a real app, you would validate credentials here
    login({ id: '1', email, name: 'John Doe' });
  };

  return (
    <FadeInView style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome Back</Text>
      <Text style={globalStyles.subtitle}>Sign in to continue</Text>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('SignUp')}
        style={styles.secondaryButton}
      />
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  secondaryButton: {
    backgroundColor: 'transparent',
  },
});

export default SignInScreen;