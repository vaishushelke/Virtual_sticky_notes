// import React from 'react';

function NoteCard({ note, deleteNote, editNote }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="note-card p-4 shadow"
        style={{ backgroundColor: note.color }}
      >
        <p className="note-text">{note.text}</p>

        <div className="d-flex gap-2 mt-3">
          <button
            className="btn btn-success"
            onClick={() => editNote(note)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;