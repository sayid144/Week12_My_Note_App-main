import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "./store/slices/NoteSlices";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import EditNote from "./components/EditNote";


function App() {

  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);


  console.log(notes);
  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <AddNote />
          <Notes note={notes} />



        </div>
      </div>
    </div>
  );
}

export default App;