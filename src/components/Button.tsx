import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { colors, fonts } from '../utils/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.8}
    >
      <Animated.View style={[styles.button, style, { transform: [{ scale: scaleValue }] }]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.bold,
  },
});

export default Button;