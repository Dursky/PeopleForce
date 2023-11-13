import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AnimatedButton} from '../AnimatedButton';
import {useDispatch} from 'react-redux';
import {removePost} from '../../reducer';

interface props {
  onPress?: () => boolean;
  onDelete?: () => void;
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
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(removePost({id}));
  };

  return (
    <View style={styles.container} onStartShouldSetResponder={onPress}>
      <Text>ID: {id}</Text>
      <Text>Title: {title}</Text>
      <Text>Description: {description}</Text>
      <Text>CreatedAt: {createdAt}</Text>
      <AnimatedButton onPress={onDeleteHandler}>
        <Text style={styles.deleteText}>Delete</Text>
      </AnimatedButton>
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
  deleteText: {
    color: 'red',
  },
});

export default PostCard;
