import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import PostCard from '../../components/PostCard';
import {PostType} from '../../types';
import {getAllPosts} from '../../common/apiRequests';
import {SERVER_URL, API_KEY} from '@env';

const DATA = [
  {
    title: 'xxxx',
    description: 'xwefewf',
    createdAt: 'erferf',
    id: 1,
  },
  {
    title: 'xxxx',
    description: 'xwefewf',
    createdAt: 'erferf',
    id: 2,
  },
  {
    title: 'xxxx',
    description: 'xwefewf',
    createdAt: 'erferf',
    id: 3,
  },
  {
    title: 'xxxx',
    description: 'xwefewf',
    createdAt: 'erferf',
    id: 4,
  },
  {
    title: 'xxxx',
    description: 'xwefewf',
    createdAt: 'erferf',
    id: 5,
  },
  {
    title: 'xxxx',
    description: 'xwefewf',
    createdAt: 'erferf',
    id: 6,
  },
];
export const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  console.log(`${SERVER_URL}/posts`);
  useEffect(() => {
    (async () => {
      try {
        const result = await getAllPosts();
        console.log('result: ', result);
      } catch (err) {
        console.error('Something went wrong get Posts: ', err);
      }
    })();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainText}>All Posts!</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.postCardPlacing}>
              <PostCard
                title={item.title}
                description={item.description}
                createdAt={item.createdAt}
                id={item.id}
              />
            </View>
          )}
          contentContainerStyle={styles.flatlistContainer}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
});
export default Posts;
