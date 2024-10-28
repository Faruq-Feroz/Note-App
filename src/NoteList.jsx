
import Note from "./Note";

const NotesList = ({ notes, deleteNote, setEditingNote }) => {
  return (
    <div className="row">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} setEditingNote={setEditingNote} />
      ))}
    </div>
  );
};

export default NotesList;
