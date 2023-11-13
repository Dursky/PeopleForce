import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PostCard from '../../components/PostCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {navigationType, storeType} from '../../types';

export const PostDetails = () => {
  const route = useRoute();
  const navigation = useNavigation<navigationType>();
  const postId = (route.params as {id: number})?.id;
  const post = useSelector((state: storeType) => state.postState.posts).filter(
    i => i.id === postId,
  )[0];

  return (
    <View style={styles.body}>
      <Text style={styles.mainText}>Post details</Text>
      <PostCard
        onPress={() => navigation.goBack?.()}
        id={post.id}
        title={post.title}
        description={post.description}
        createdAt={post.createdAt}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  mainText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
});
