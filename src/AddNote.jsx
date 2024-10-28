// src/components/AddNote.js
import { useState, useEffect } from 'react';

const AddNote = ({ addNote, editingNote, editNote }) => {
  const [text, setText] = useState('');
  const characterLimit = 200;

  useEffect(() => {
    if (editingNote) setText(editingNote.text);
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      if (editingNote) {
        editNote(editingNote.id, text);
      } else {
        addNote(text);
      }
      setText('');
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>{editingNote ? 'Edit Note' : 'Add a New Note'}</label>
            <input
              type="text"
              placeholder="Enter note"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={characterLimit}
              className="form-control note-input"
            />
            <small className="text-muted">{text.length} / {characterLimit}</small>
          </div>
          <button type="submit" className="btn btn-primary my-but">
            {editingNote ? 'Save Changes' : 'Add Note'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
