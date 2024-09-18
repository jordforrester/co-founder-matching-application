import { DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#FF4B4B',
  secondary: '#FF7777',
  background: '#FFFFFF',
  text: '#333333',
  textLight: '#999999',
  border: '#E0E0E0',
};

export const fonts = {
  regular: 'Roboto',
  bold: 'Roboto-Bold',
  light: 'Roboto-Light',
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    text: colors.text,
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 28,
    color: colors.text,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 18,
    color: colors.textLight,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: fonts.bold,
    color: colors.background,
    fontSize: 16,
  },
  input: {
    fontFamily: fonts.regular,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
});