import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PersonalState {
    name: string;
    surname: string;
    address: string;
    city: string;
    postalCode: string;
}

const initialState: PersonalState = {
    name: '',
    surname: '',
    address: '',
    city: '',
    postalCode: '',
};

const personalSlice = createSlice({
    name: 'personal',
    initialState,
    reducers: {
        setPersonalData: (state, action: PayloadAction<PersonalState>) => {
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.address = action.payload.address;
            state.city = action.payload.city;
            state.postalCode = action.payload.postalCode;
        },
    },
});

export const { setPersonalData } = personalSlice.actions;

export default personalSlice.reducer;
