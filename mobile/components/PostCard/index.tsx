import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PostType} from '../../types';

export const PostCard = ({title, description, createdAt, id}: PostType) => {
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{createdAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default PostCard;
