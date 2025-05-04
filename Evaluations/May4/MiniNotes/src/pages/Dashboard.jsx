import { useState } from 'react'
import '../styles/dashboard.css'

export default function Dashboard() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const addNote = () => {
    if (!title || !content) return
    const newNote = { id: Date.now(), title, content }
    setNotes([newNote, ...notes])
    setTitle('')
    setContent('')
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="container">
      <h1>Mini Notes</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={addNote}>Add Note</button>
      <div className="notes">
        {notes.map(note => (
          <div key={note.id} className="note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
