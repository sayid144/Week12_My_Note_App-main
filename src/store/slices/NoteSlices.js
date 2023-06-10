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
export const deleteNote = createAsyncThunk("note/deleteNote", async (noteId) => {
    await axios.delete(`http://localhost:9000/delete_note/${noteId}`);
    return noteId;
})
export const editNote = createAsyncThunk("note/editNote", async (noteId, newNote) => {
    const response = await axios.update(`http://localhost:9000/update_note/${noteId}`, newNote);
    return response.data;
})


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
            const noteId = action.payload;
            state.notes = state.notes.filter((note) => note.id !== noteId)

        }).addCase(editNote.fulfilled, (state, action) => {
            const { noteId, newNote } = action.payload;
            const oldNote = state.notes.find((note) => note.id === noteId)
        })

    }
})
//export const selectedNotes = (state) => state.note.notes;
//export const noteStatus = (state) => state.note.status;
//export const noteError = (state) => state.note.error;

export default noteSlices.reducer;