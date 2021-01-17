import React from "react";

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight
} from 'react-instantsearch-dom';

const Search = () => {
  const searchClient = algoliasearch(
    'I2CQSI9ZP6',
    process.env.REACT_APP_SEARCH_API_KEY
  );

  function Hit(props) {
  return (
    <a href="https://www.google.com">
      <article>
        <h1>
          <Highlight attribute="title" hit={props.hit} />
        </h1>
      </article>
    </a>
  );
}

  return (
    <div className="ais-InstantSearch">
        <h1>React InstantSearch</h1>
        <InstantSearch indexName="dev_articles" searchClient={searchClient}>
          <div className="right-panel">
            <SearchBox
             className='searchbox'
             onSubmit={event => {

             }}
            />
            <Hits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </div>
  )
}
export default Search;