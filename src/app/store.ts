import { configureStore } from '@reduxjs/toolkit';
import { authReducer, postReducer } from './features';
import { counterReducer } from './features';
import { loggerMiddleWare } from './middleware';
import { postsApi } from './services';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    auth: authReducer,
    counter: counterReducer,
    posts: postReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loggerMiddleWare).concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
