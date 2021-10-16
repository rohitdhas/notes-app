import { EditorPage } from "../styles/editorStyles";
import { useRef } from "react";
import { saveNote } from "../helpers/noteHandler";
import { useAuth } from "../firebase/userAuth";

export default function Editor() {
  const title = useRef("");
  const noteInput = useRef("");
  const { userdata } = useAuth();

  return (
    <EditorPage>
      <div className="topbar">
        <input type="text" placeholder="Note Title" ref={title} />
        <button
          id="save_btn"
          onClick={() => saveNote(title, noteInput, userdata.uid)}
        >
          Save
        </button>
        <button id="discard_btn" onClick={() => (window.location = "/")}>
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
