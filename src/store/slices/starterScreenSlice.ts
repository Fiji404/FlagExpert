import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../index';

const INITIAL_STATE = {
    isWelcomeScreenIgnored: 'false',
    isSkippedToGameScreen: false
};

const starterScreenSlice = createSlice({
    name: 'starter-screen',
    initialState: INITIAL_STATE,
    reducers: {
        setScreenIgnorance(state, action) {
            console.log('mod');
            state.isWelcomeScreenIgnored = action.payload;
        },
        toggleSkippedGameScreen(state) {
            state.isSkippedToGameScreen = !state.isSkippedToGameScreen;
        }
    }
});

export const setScreenIgnoranceToLS = (isWelcomeScreenIgnored: WelcomeScreenIgnoranceOptions) => {
    return (dispatch: AppDispatch) => {
        localStorage.setItem('isWelcomeScreenIgnored', isWelcomeScreenIgnored);
        dispatch(setScreenIgnorance(isWelcomeScreenIgnored));
    };
};

export const getScreenIgnoranceFromLS = () => {
    return (dispatch: AppDispatch) => {
        const isWelcomeScreenIgnored = localStorage.getItem('isWelcomeScreenIgnored');
        console.log(isWelcomeScreenIgnored);
        if (isWelcomeScreenIgnored === null) return;
        console.log('a');
        dispatch(setScreenIgnorance(isWelcomeScreenIgnored));
    };
};

export const { setScreenIgnorance, toggleSkippedGameScreen } = starterScreenSlice.actions;
export const { reducer: starterScreenReducer } = starterScreenSlice;
export type WelcomeScreenIgnoranceOptions = 'true' | 'false';
