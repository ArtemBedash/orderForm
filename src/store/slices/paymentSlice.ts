import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentState {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
}

const initialState: PaymentState = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setPaymentDetails: (state, action: PayloadAction<PaymentState>) => {
            state.cardNumber = action.payload.cardNumber;
            state.expiryDate = action.payload.expiryDate;
            state.cvv = action.payload.cvv;
        },
        clearPaymentDetails: (state) => {
            state.cardNumber = '';
            state.expiryDate = '';
            state.cvv = '';
        },
    },
});

export const { setPaymentDetails, clearPaymentDetails } = paymentSlice.actions;
export default paymentSlice.reducer;
