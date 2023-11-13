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
  },
});

export const {
  actions: {setPosts},
  reducer: postsReducer,
} = postsSlicer;
