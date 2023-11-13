import React, {useRef} from 'react';
import {Pressable, Animated, ViewStyle} from 'react-native';

interface AnimatedButtonProps {
  onPress?: (data?: unknown) => void;
  children: React.ReactNode;
  style?: ViewStyle[] | ViewStyle;
  containerStyle?: ViewStyle[] | ViewStyle;
  disabled?: boolean;
  styleClick?: ViewStyle | ViewStyle[];
}

export const AnimatedButton = ({
  onPress,
  children,
  disabled,
  style,
  containerStyle,
  styleClick,
}: AnimatedButtonProps) => {
  const animated = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const buttonStyle = {
    opacity: disabled ? 0.7 : animated,
    ...containerStyle,
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={style}
      disabled={disabled}>
      {({pressed}) => (
        <Animated.View style={[buttonStyle, pressed && styleClick]}>
          {children}
        </Animated.View>
      )}
    </Pressable>
  );
};
