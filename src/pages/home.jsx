import { HomePage } from "../styles/homeStyles";
import { getAllNotes } from "../helpers/noteHandler";
import { useEffect, useState } from "react";
import { useAuth } from "../firebase/userAuth";
import { Link } from "react-router-dom";

export default function Home() {
  const { userdata } = useAuth();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const userId = userdata.uid;

    if (userId) {
      getAllNotes(userId, setNotes);
    }
  }, [userdata]);

  return (
    <HomePage>
      <h2>Your Notes</h2>
      <div className="notes">
        <Link to="/editor">
          <div className="note_card">
            <i className="fas fa-plus"></i>
            <span>Create New</span>
          </div>
        </Link>

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
    <Link to={`/note/${id}`}>
      <div className="note_card">{data.title}</div>
    </Link>
  );
}
