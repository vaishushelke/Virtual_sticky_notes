import { useState } from 'react';

function NoteForm({ addNote, editingNote, updateNote, cancelEdit }) {
  const [text, setText] = useState(editingNote?.text ?? '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    if (editingNote) {
      updateNote(editingNote.id, text);
    } else {
      addNote(text);
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="card p-4 shadow-lg border-0 rounded-4">
        <h3 className="mb-3">
          {editingNote ? 'Edit Note' : 'Create New Note'}
        </h3>

        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Write your note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="d-flex gap-2">
          <button className="btn btn-primary btn-lg" type="submit">
            {editingNote ? 'Update Note' : 'Add Sticky Note'}
          </button>
          {editingNote && (
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default NoteForm;