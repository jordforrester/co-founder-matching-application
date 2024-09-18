import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors, globalStyles } from '../utils/theme';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  style?: object;
}

const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder, secureTextEntry, style }) => (
  <TextInput
    style={[globalStyles.input, style]}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    placeholderTextColor={colors.textLight}
    secureTextEntry={secureTextEntry}
  />
);

export default Input;