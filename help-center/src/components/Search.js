import React, { useEffect } from "react";

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Highlight,
  Hits,
  connectHits
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'I2CQSI9ZP6',
  process.env.REACT_APP_SEARCH_API_KEY
);

const Search = (props) => {

  function createURL(title) {

  }

  function Hits({ hits }) {
    return (
      <ul>
        {hits.map(hit => (
          <a key={hit.objectID} href={"/article/" + hit.slug}>
            <li className="search_result">{hit.title}</li>
          </a>
        ))}
      </ul>
    );
  }

  const CustomHits = connectHits(Hits);

  return (
    <div className="ais-InstantSearch">
        <h1>React InstantSearch</h1>
        <InstantSearch indexName="dev_articles" searchClient={searchClient}>
          <div className="right-panel">
            <SearchBox
             className='searchbox'
             onSubmit={event => {}}
            />
            <CustomHits />
          </div>
        </InstantSearch>
      </div>
  )
}
export default Search;