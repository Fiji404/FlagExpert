import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { starterScreenReducer } from './slices/starterScreenSlice';
export const store = configureStore({
    reducer: {
        starterScreen: starterScreenReducer
    }
});

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
