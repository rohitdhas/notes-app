import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchFor } from "../helpers/searchHandler";
import { NoteCard } from "./home";
import { SearchPage } from "../styles/searchPageStyles";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const params = useParams();

  useEffect(() => {
    const query = params.query;
    searchFor(query, setSearchResults);
  }, []);

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
