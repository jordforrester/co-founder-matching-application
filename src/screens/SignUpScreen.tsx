import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthContext } from '../contexts/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
import FadeInView from '../components/FadeInView';
import { RootStackParamList } from '../navigation/AppNavigator';
import { globalStyles } from '../utils/theme';

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSignUp = () => {
    // In a real app, you would send this data to your backend
    login({ id: Date.now().toString(), name, email });
  };

  return (
    <FadeInView style={globalStyles.container}>
      <Text style={globalStyles.title}>Create Account</Text>
      <Text style={globalStyles.subtitle}>Sign up to get started</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
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
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button
        title="Already have an account? Sign In"
        onPress={() => navigation.navigate('SignIn')}
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

export default SignUpScreen;