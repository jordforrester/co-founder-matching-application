import React, { useRef, useEffect } from 'react';
import { Animated, ViewProps } from 'react-native';

interface FadeInViewProps extends ViewProps {
  duration?: number;
}

const FadeInView: React.FC<FadeInViewProps> = ({ children, duration = 300, style, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: fadeAnim,
        },
      ]}
      {...props}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;