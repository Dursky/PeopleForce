import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface props {
  onPress?: () => boolean;
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

export const PostCard = ({
  id,
  title,
  description,
  createdAt,
  onPress,
}: props) => {
  return (
    <View style={styles.container} onStartShouldSetResponder={onPress}>
      <Text>ID: {id}</Text>
      <Text>Title: {title}</Text>
      <Text>Description: {description}</Text>
      <Text>CreatedAt: {createdAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: '#7CB9E8',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default PostCard;
