import { appReducer } from './appSlice';
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    appReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector = useSelector<RootState>
