import { Nav } from "../styles/navStyles";
import { useAuth } from "../firebase/userAuth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const { logOut } = useAuth();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  function search(e) {
    e.preventDefault();
    if (searchInput) {
      history.push(`/search/${searchInput}`);
    } else return;
  }

  return (
    <Nav>
      <Link to="/">
        <div id="site_title">Notes</div>
      </Link>
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
