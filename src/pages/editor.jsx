import { EditorPage } from "../styles/editorStyles";
import { useNoteHander } from "../helpers/noteHandler";
import { useAuth } from "../firebase/userAuth";
import { useParams } from "react-router";
import { useRef, useEffect } from "react";

export default function Editor() {
  const title = useRef("");
  const noteInput = useRef("");
  const { userdata } = useAuth();
  const params = useParams();
  const { saveNote, discardNote, getNote, data } = useNoteHander();

  useEffect(() => {
    // Fetching note data if note id is present in url
    const id = params.id;
    if (id) {
      getNote(id);
    }
  }, [params.id]);

  useEffect(() => {
    // Populating input fields with note data (for editing)
    const id = params.id;
    if (id && data.title) {
      title.current.value = data.title;
      noteInput.current.value = data.note;
    }
  }, [data]);

  return (
    <EditorPage>
      <div className="topbar">
        <input type="text" placeholder="Note Title" ref={title} />
        <button
          id="save_btn"
          onClick={() => saveNote(title, noteInput, userdata.uid, params.id)}
        >
          Save
        </button>
        <button id="discard_btn" onClick={discardNote}>
          Discard
        </button>
      </div>
      <textarea
        cols="30"
        rows="10"
        placeholder="Note Goes Here..."
        ref={noteInput}
      ></textarea>
    </EditorPage>
  );
}
