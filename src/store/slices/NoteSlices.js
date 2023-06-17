import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    notes: [],
    status: "idle",
    error: null
};
export const fetchNotes = createAsyncThunk("note/fetchNotes", async () => {
    const response = await axios.get("http://localhost:9000/notes");
    return response.data;
});

export const createNote = createAsyncThunk("note/createNote", async (addNewNote) => {
    const response = await axios.post("http://localhost:9000/create_note", addNewNote);
    return response.data;
})
export const deleteNote = createAsyncThunk("note/deleteNote", async (id) => {
    await axios.delete(`http://localhost:9000/delete_note/${id}`);
    return id;
})
export const editNote = createAsyncThunk("note/editNote", async ({ noteId, updateNote }) => {
    const response = await axios.put(`http://localhost:9000/update_note/${noteId}`, updateNote);
    return response.data;
});

export const noteSlices = createSlice({
    name: "note",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchNotes.pending, (state) => {
            state.status = "loading";
            state.error = null;
        }).addCase(fetchNotes.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.notes = action.payload;
        }).addCase(fetchNotes.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;

        }).addCase(createNote.fulfilled, (state, action) => {
            state.notes.push(action.payload);

        }).addCase(deleteNote.fulfilled, (state, action) => {
            const id = action.payload;
            state.notes = state.notes.filter((note) => note.id !== id)

        }).addCase(editNote.fulfilled, (state, action) => {
            const { id, title, content } = action.payload;
            const existingNote = state.notes.find((note) => Number(note.id) === Number(id));
            if (existingNote) {
                existingNote.title = title;
                existingNote.content = content;
            }
        })

    }
})

export default noteSlices.reducer;