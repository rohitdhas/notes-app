import { ViewerPage, LoadingText } from "../styles/viewerStyles";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useNoteHander } from "../helpers/noteHandler";
import { Link } from "react-router-dom";

export default function Viewer() {
  const params = useParams();
  const { getNote, deleteNote, data: noteData } = useNoteHander();

  useEffect(() => {
    const noteId = params.id;
    getNote(noteId);
  }, []);

  return (
    <ViewerPage>
      {!noteData.title ? (
        <LoadingText>
          <p>Loading...</p>
        </LoadingText>
      ) : (
        <>
          <div className="note_title">
            <span className="title">{noteData.title}</span>
            <span className="meta">
              <span>Last edited - {noteData.time.split(",")[0]}</span>
              <button id="delete_btn" onClick={() => deleteNote(params.id)}>
                Delete
              </button>
              <Link to={`/editor/${params.id}`}>
                <button id="edit_btn">Edit</button>
              </Link>
            </span>
          </div>
          <div className="note_detail">{noteData.note}</div>
        </>
      )}
    </ViewerPage>
  );
}
