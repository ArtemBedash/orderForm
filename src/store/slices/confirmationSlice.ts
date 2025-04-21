import { createSlice } from '@reduxjs/toolkit';

interface ConfirmationState {
    confirmed: boolean;
}

const initialState: ConfirmationState = {
    confirmed: false,
};

const confirmationSlice = createSlice({
    name: 'confirmation',
    initialState,
    reducers: {
        confirmOrder(state) {
            state.confirmed = true;
        },
        resetConfirmation(state) {
            state.confirmed = false;
        },
    },
});

export const { confirmOrder, resetConfirmation } = confirmationSlice.actions;
export default confirmationSlice.reducer;
