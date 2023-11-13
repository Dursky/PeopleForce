import {configureStore} from '@reduxjs/toolkit';
import {postsReducer} from '../reducer';

export const store = configureStore({
  reducer: {
    postState: postsReducer,
  },
});
