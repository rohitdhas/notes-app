import { HomePage } from "../styles/homeStyles";
import { getAllNotes } from "../helpers/noteHandler";
import { useEffect, useState } from "react";
import { useAuth } from "../firebase/userAuth";

export default function Home() {
  const { userdata } = useAuth();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (userdata.uid) {
      getAllNotes(userdata.uid, setNotes);
    }
  }, [userdata]);

  return (
    <HomePage>
      <h2>Your Notes</h2>
      <div className="notes">
        <a href="/editor">
          <div className="note_card">
            <i className="fas fa-plus"></i>
            <span>Create New</span>
          </div>
        </a>
        {notes.length
          ? notes.map((note) => {
              return <NoteCard key={note.id} note={note} />;
            })
          : null}
      </div>
    </HomePage>
  );
}

export function NoteCard({ note }) {
  const { id, data } = note;
  return (
    <a href={`/note/${id}`}>
      <div className="note_card">{data.title}</div>
    </a>
  );
}
