// src/DigitalBoard.js
import React, { useState } from 'react';
import { CiTextAlignCenter } from 'react-icons/ci';

const DigitalBoard = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNote = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      if (isEditing) {
        const updatedNotes = notes.map((note, index) =>
          index === editIndex ? { title, content } : note
        );
        setNotes(updatedNotes);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setNotes([...notes, { title, content }]);
      }
      setTitle('');
      setContent('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleEditNote = (index) => {
    setTitle(notes[index].title);
    setContent(notes[index].content);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Digital Board</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
          placeholder="Enter title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={styles.textarea}
          placeholder="Enter note content"
        />
        <button onClick={handleAddNote} style={styles.button}>
          {isEditing ? 'Update Note' : 'Add Note'}
        </button>
      </div>
      <div style={styles.notesContainer}>
        {notes.map((note, index) => (
          <div key={index} style={styles.note}>
            <h2 style={styles.noteTitle}>{note.title}</h2>
            <p style={styles.noteContent}>{note.content}</p>
            <div style={styles.noteActions}>
              <button onClick={() => handleEditNote(index)} style={styles.editButton}>
                Edit
              </button>
              <button onClick={() => handleDeleteNote(index)} style={styles.deleteButton}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    height: '87vh',
    maxWidth: '550px',
    margin: '7vh auto',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
    textAlign:'center'
    
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxwidth: '550px',
    alignItems:'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    marginBottom: '10px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '1em',
    marginBottom: '10px',
    width: '100%',
    height: '100px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
  },
  notesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  note: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    margin: '5px',
    border: '1px solid #ccc',
    width: '80%',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteTitle: {
    fontSize: '1.2em',
    marginBottom: '5px',
  },
  noteContent: {
    fontSize: '1em',
    marginBottom: '10px',
  },
  noteActions: {
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
    backgroundColor: '#ffc107',
    color: '#fff',
    border: 'none',
  },
  deleteButton: {
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
  },
};

export default DigitalBoard;
