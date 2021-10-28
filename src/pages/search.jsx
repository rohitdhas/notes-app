import { useEffect, useState } from "react";
import { searchFor } from "../helpers/searchHandler";
import { SearchPage } from "../styles/searchPageStyles";
import { useAuth } from "../firebase/userAuth";
import { useParams } from "react-router";
import { NoteCard } from "./home";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const params = useParams();
  const { userdata } = useAuth();

  useEffect(() => {
    const query = params.query;
    const uid = userdata.uid;

    if (uid) {
      searchFor(query, uid, setSearchResults);
    }
  }, [params.query, userdata.uid]);

  return (
    <SearchPage>
      {!searchResults.length ? (
        <h3>No Results Found!</h3>
      ) : (
        <>
          <h3>{searchResults.length} - Results found!</h3>
          {searchResults.map((item) => {
            return <NoteCard key={item.id} note={item} />;
          })}
        </>
      )}
    </SearchPage>
  );
}
