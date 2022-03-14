import { RootState } from '@/app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const slice = createSlice({
  name: 'counterSlice',
  initialState: initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export default slice.reducer;

export const { increment, decrement, incrementByAmount } = slice.actions;

export const getCounterValue = (state: RootState) => state.counter.value;
