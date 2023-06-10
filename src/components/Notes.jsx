/* eslint-disable react/prop-types */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteNote } from "../store/slices/NoteSlices";


function Notes() {

  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes)
  const handleDelete = (noteId) => {
    dispatch(deleteNote(noteId))
  };

  return (
    <div className="flex flex-wrap justify-center mt-5">
      {notes.map((note) => (
        <div
          className="relative bg-yellow-400 w-64 h-64 m-5 shadow-2xl overflow-hidden"
          key={note.id}
        >
          <div className="p-5">
            <h3 className="font-bold text-2xl mb-4">{note.title}</h3>
            <p>{note.content}</p>
          </div>

          <div className="absolute bg-yellow-400 w-12 h-12 rotate-45 -top-6 -left-6" />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
            <button className="mr-2">
              <FaEdit size={20} onClick={() => props.handleEdit(note.id, note)} />
            </button>
            <button>
              <FaTrash size={20} onClick={() => handleDelete(note.id)} />
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Notes;