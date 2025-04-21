import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PhoneState {
  phone: string;
}

const initialState: PhoneState = {
  phone: '',
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
  },
});

export const { setPhone } = phoneSlice.actions;
export default phoneSlice.reducer;