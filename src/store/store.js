import { configureStore } from '@reduxjs/toolkit'
import NoteSlices from './slices/NoteSlices';

export const store = configureStore({
    reducer: {
        note: NoteSlices
    }
})


