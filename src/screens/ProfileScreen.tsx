import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
import FadeInView from '../components/FadeInView';
import { globalStyles } from '../utils/theme';

const ProfileScreen: React.FC = () => {
  const { user, login } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState('');

  const handleUpdateProfile = () => {
    // In a real app, you would send this data to your backend
    login({ ...user!, name, bio });
  };

  return (
    <FadeInView style={globalStyles.container}>
      <Text style={globalStyles.title}>Your Profile</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <Input
        value={bio}
        onChangeText={setBio}
        placeholder="Bio"
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </FadeInView>
  );
};

export default ProfileScreen;