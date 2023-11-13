import React, {useRef} from 'react';
import {Pressable, Animated, ViewStyle} from 'react-native';
import {debounce} from 'lodash';

interface AnimatedButtonProps {
  onPress?: (data?: unknown) => void;
  children: React.ReactNode;
  style?: ViewStyle[] | ViewStyle;
  containerStyle?: ViewStyle[] | ViewStyle;
  disabled?: boolean;
  styleClick?: ViewStyle | ViewStyle[];
  timing?: number;
}

export const AnimatedButton = ({
  onPress,
  children,
  disabled,
  style,
  containerStyle,
  styleClick,
  timing = 150,
}: AnimatedButtonProps) => {
  const animated = useRef(new Animated.Value(1)).current;

  const handlePressIn = debounce(() => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, timing);

  const handlePressOut = debounce(() => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, timing);

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
