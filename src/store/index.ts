import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from './slices/phoneSlice';
import personalReducer from './slices/personalSlice';
import paymentReducer from './slices/paymentSlice';
import confirmationReducer from './slices/confirmationSlice';
import stepReducer from "./slices/stepSlice.ts";



export const store = configureStore({
  reducer: {
    phone: phoneReducer,
    personal: personalReducer,
    payment: paymentReducer,
    confirmation: confirmationReducer,
    step:stepReducer,
  },
  // @ts-ignore
  devTools: process.env.NODE_ENV !== 'production',

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
