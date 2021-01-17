import React from "react";

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits
} from 'react-instantsearch-dom';

const Search = () => {
  const searchClient = algoliasearch(
    'I2CQSI9ZP6',
    process.env.REACT_APP_SEARCH_API_KEY
  );

  const Hit = ({ hit }) => <p>{hit.title}</p>;

  return (
    <div className="ais-InstantSearch">
        <h1>React InstantSearch</h1>
        <InstantSearch indexName="dev_articles" searchClient={searchClient}>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </div>
  )
}
export default Search;