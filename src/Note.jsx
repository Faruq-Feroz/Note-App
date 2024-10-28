

const Note = ({ note, deleteNote, setEditingNote }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 mb-4">
      <div className="card note-card">
        <div className="card-body">
          <p className="card-text">{note.text}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setEditingNote(note)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
