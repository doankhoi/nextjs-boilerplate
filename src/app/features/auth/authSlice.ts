import { RootState } from '@/app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

const slice = createSlice({
  name: 'authSlice',
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: state => {
      state.token = '';
    },
  },
});

export default slice.reducer;

export const { setToken, removeToken } = slice.actions;

export const getTokenValue = (state: RootState) => state.auth.token;
