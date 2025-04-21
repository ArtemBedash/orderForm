import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepState {
    currentStep: number; // Текущий этап
    completedSteps: boolean[]; // Массив, где true означает, что этап завершён
}

const initialState: StepState = {
    currentStep: 0,
    completedSteps: [false, false, false, false],
};

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        nextStep: (state) => {
            if (state.currentStep < 3) {
                state.currentStep += 1;
            }
        },
        previousStep: (state) => {
            if (state.currentStep > 0) {
                state.currentStep -= 1;
            }
        },
        completeStep: (state, action: PayloadAction<number>) => {
            state.completedSteps[action.payload] = true;
        },
    },
});

export const { nextStep, previousStep, completeStep } = stepSlice.actions;

export default stepSlice.reducer;
