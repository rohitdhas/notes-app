import { Nav } from "../styles/navStyles";
import { useAuth } from "../firebase/userAuth";
import { useState } from "react";

export default function Navbar() {
  const { logOut } = useAuth();
  const [searchInput, setSearchInput] = useState("");

  function search(e) {
    e.preventDefault();
    if (searchInput) {
      window.location = `/search/${searchInput}`;
    } else return;
  }

  return (
    <Nav>
      <a href="/">
        <div id="site_title">Notes</div>
      </a>
      <form onSubmit={(e) => search(e)}>
        <input
          type="text"
          value={searchInput}
          placeholder="Search Notes"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
      <div className="user">
        <button onClick={logOut}>Log Out</button>
      </div>
    </Nav>
  );
}
