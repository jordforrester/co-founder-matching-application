import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';
import FadeInView from '../components/FadeInView';
import { colors } from '../utils/theme';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
}

const SWIPE_THRESHOLD = 120;

const MatchScreen: React.FC = () => {
  const [profiles] = useState<Profile[]>([
    { id: '1', name: 'Alice', age: 28, bio: 'Software Developer' },
    { id: '2', name: 'Bob', age: 32, bio: 'UX Designer' },
    { id: '3', name: 'Charlie', age: 25, bio: 'Product Manager' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const position = new Animated.ValueXY();

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp'
  });

  const rotateAndTranslate = {
    transform: [{
      rotate: rotate
    },
    ...position.getTranslateTransform()
    ]
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        swipeRight();
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        swipeLeft();
      } else {
        resetPosition();
      }
    },
  });

  const swipeRight = () => {
    Animated.spring(position, {
      toValue: { x: SCREEN_WIDTH + 100, y: 0 },
      useNativeDriver: true
    }).start(() => {
      setCurrentIndex(currentIndex + 1);
      position.setValue({ x: 0, y: 0 });
    });
  };

  const swipeLeft = () => {
    Animated.spring(position, {
      toValue: { x: -SCREEN_WIDTH - 100, y: 0 },
      useNativeDriver: true
    }).start(() => {
      setCurrentIndex(currentIndex + 1);
      position.setValue({ x: 0, y: 0 });
    });
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      friction: 4,
      useNativeDriver: true
    }).start();
  };

  return (
    <FadeInView style={styles.container}>
      {profiles.map((profile, index) => {
        if (index < currentIndex) {
          return null;
        } else if (index === currentIndex) {
          return (
            <Animated.View
              {...panResponder.panHandlers}
              key={profile.id}
              style={[rotateAndTranslate, styles.card]}
            >
              <Text style={styles.name}>{profile.name}, {profile.age}</Text>
              <Text style={styles.bio}>{profile.bio}</Text>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={profile.id}
              style={[styles.card, { opacity: 0.7 }]}
            >
              <Text style={styles.name}>{profile.name}, {profile.age}</Text>
              <Text style={styles.bio}>{profile.bio}</Text>
            </Animated.View>
          );
        }
      }).reverse()}
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  card: {
    position: 'absolute',
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 200,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MatchScreen;