import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isWelcomeScreenIgnored: false
};

const starterScreenSlice = createSlice({
    name: 'starter-screen',
    initialState: INITIAL_STATE,
    reducers: {
        setScreenIgnorance(state, action) {
            state.isWelcomeScreenIgnored = action.payload;
        }
    }
});

export const { setScreenIgnorance } = starterScreenSlice.actions;
export const { reducer: starterScreenReducer } = starterScreenSlice;
