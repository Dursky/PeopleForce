import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import PostCard from '../../components/PostCard';
import {navigationType, storeType} from '../../types';
import {getAllPosts} from '../../common/apiRequests';
import {AxiosError} from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setPosts} from '../../reducer';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';

export const Posts = () => {
  const navigation = useNavigation<navigationType>();
  const postList = useSelector((state: storeType) => state.postState.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const result = await getAllPosts();
        dispatch(setPosts(result));
      } catch (err) {
        console.error(
          'Something went wrong get Posts: ',
          (err as AxiosError).request,
        );
      }
    })();
  }, [dispatch]);

  const onPress = (id: number) => {
    navigation && navigation.navigate?.('PostDetails', {id});
    return true;
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainText}>All Posts!</Text>
        <Button
          content="Create new post"
          onPress={() => navigation.navigate?.('AddPost')}
        />
        {postList.length > 0 && (
          <FlatList
            data={postList}
            renderItem={({item}) => (
              <View style={styles.postCardPlacing}>
                <PostCard
                  title={item.title}
                  description={item.description}
                  createdAt={item.createdAt}
                  id={item.id}
                  onPress={() => onPress(item.id)}
                />
              </View>
            )}
            style={styles.flatlistPlacing}
            contentContainerStyle={styles.flatlistContainer}
            keyExtractor={item => item.id}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  flatlistContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  postCardPlacing: {
    marginTop: 10,
  },
  mainText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  flatlistPlacing: {width: '100%', paddingLeft: 10, paddingRight: 10},
});
export default Posts;
