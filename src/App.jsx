import  { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    return savedNotes || [];
  });
  const [editingNote, setEditingNote] = useState(null);

  // Save Notes to Local Storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add Note
  const addNote = (text) => {
    const newNote = {
      id: Date(),
      text,
      color: randomColor(),
    };

    setNotes([newNote, ...notes]);
  };

  // Delete Note
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);

    if (editingNote?.id === id) {
      setEditingNote(null);
    }
  };

  // Start editing a note
  const editNote = (note) => {
    setEditingNote(note);
  };

  // Update Note
  const updateNote = (id, text) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text } : note
    );

    setNotes(updatedNotes);
    setEditingNote(null);
  };

  // Random Sticky Note Colors
  const randomColor = () => {
    const colors = [
      '#fff9b0',
      '#ffd6d6',
      '#d6f5d6',
      '#d6e6ff',
      '#f8d6ff',
      '#ffe7c7',
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      <Navbar />

      <div className="container py-4">
        <NoteForm
          key={editingNote?.id ?? 'new'}
          addNote={addNote}
          editingNote={editingNote}
          updateNote={updateNote}
          cancelEdit={() => setEditingNote(null)}
        />

        <NotesList
          notes={notes}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      </div>
    </div>
  );
}

export default App;