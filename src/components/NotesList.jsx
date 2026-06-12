// import React from 'react';
import NoteCard from './NoteCard';

function NotesList({ notes, deleteNote, editNote }) {
  return (
    <div className="row">
      {notes.length === 0 ? (
        <h4 className="text-center mt-5 text-secondary">
          No Notes Available
        </h4>
      ) : (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))
      )}
    </div>
  );
}

export default NotesList;