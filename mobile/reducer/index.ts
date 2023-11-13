import {createSlice} from '@reduxjs/toolkit';
import {PostType} from '../types';

const postsSlicer = createSlice({
  name: 'posts',
  initialState: {posts: [] as PostType[]},
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(i => i.id !== action.payload.id);
    },
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const {
  actions: {setPosts, removePost, addPost},
  reducer: postsReducer,
} = postsSlicer;
