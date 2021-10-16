import { ViewerPage, LoadingText } from "../styles/viewerStyles";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getNote, deleteNote } from "../helpers/noteHandler";

export default function Viewer() {
  const params = useParams();
  const [noteData, setNoteData] = useState({});

  useEffect(() => {
    const noteId = params.id;
    getNote(noteId, setNoteData);
  }, []);

  return (
    <ViewerPage>
      {!noteData.title ? (
        <LoadingText>
          <h1>Loading...</h1>
        </LoadingText>
      ) : (
        <>
          <div className="note_title">
            <span className="title">{noteData.title}</span>
            <span className="time">
              Edited - {noteData.time.split(",")[0]}
              <button onClick={() => deleteNote(params.id)}>Delete</button>
            </span>
          </div>
          <div className="note_detail">{noteData.note}</div>
        </>
      )}
    </ViewerPage>
  );
}
