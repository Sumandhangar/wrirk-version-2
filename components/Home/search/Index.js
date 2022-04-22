import React, { useEffect, useState, createRef } from "react";
import algoliasearch from "algoliasearch";
import StyledSearchBox from "./styled/SearchBox"
import StyledSearchResult from "./styled/SearchResult"
import StyledSearchRoot from "./styled/SearchRoot"
import { ThemeProvider } from "styled-components"
import useClickOutside from "./useClickOutside"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination
} from "react-instantsearch-dom";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const theme = {
  foreground: "#050505",
  background: "white",
  faded: "#888",
}

const searchClient = algoliasearch(
  "ZKRMUZV8YI",
  "7d81e0ed48f8b489c956cccf0633cad6"
);

function Search({ indices }) {
  const rootRef = createRef()
  const [point, setPoint] = useState("");
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  useClickOutside(rootRef, () => setFocus(false))

  const getdata = (data) => {
    setPoint(data);
  }

  useEffect(() => {

  }, [point])
  return (
    <ThemeProvider theme={theme}>
      <StyledSearchRoot ref={rootRef}>
        <InstantSearch searchClient={searchClient} indexName="topics" onSearchStateChange={({ query }) => setQuery(query)}>
          <StyledSearchBox getdata={getdata} onFocus={() => setFocus(true)} hasFocus={hasFocus}/>

          {/* <Content /> */}
          <StyledSearchResult
            show={query && query.length > 0 && hasFocus}
            indices={indices}
          />

        </InstantSearch>
      </StyledSearchRoot>
    </ThemeProvider>
  );
}

export default Search;
