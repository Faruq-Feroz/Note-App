// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap directly
import { useState, useEffect } from 'react';
import NotesList from './NoteList';
import AddNote from './AddNote';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Load notes from local storage on component mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to local storage whenever the notes array changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = { id: Date.now(), text };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id, updatedText) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text: updatedText } : note)));
    setEditingNote(null);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container app-container">
      <h1 className="my-4 text-center">Note App</h1>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-4 search-input"
      />
      <AddNote addNote={addNote} editingNote={editingNote} editNote={editNote} />
      <NotesList notes={filteredNotes} deleteNote={deleteNote} setEditingNote={setEditingNote} />
    </div>
  );
}

export default App;
