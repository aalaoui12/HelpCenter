import React, { useEffect } from "react";

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Highlight,
  Hits,
  connectHits,
  connectSearchBox
} from 'react-instantsearch-dom';
import { connectStateResults } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  'I2CQSI9ZP6',
  process.env.REACT_APP_SEARCH_API_KEY
);

const Search = (props) => {

  const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
    <form class="" noValidate action="" role="search">
      <div class="w-full py-10">
        <input class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
        />
      </div>
    </form>
  );

  const CustomSearchBox = connectSearchBox(SearchBox);

  function Hits({ hits }) {
    return (
      <ul class="h-full">
        {hits.map(hit => (
          <a class="block pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-500 hover:text-blue-900" key={hit.objectID} href={"/article/" + hit.slug}>
            <li class="font-bold font-serif text-gray-200">
              {hit.title}
            </li>
            <li class="font-serif text-gray-200">
              {hit.subtitle}
            </li>
          </a>
        ))}
      </ul>
    );
  }

  const CustomHits = connectHits(Hits);

  const Results = connectStateResults(
  ({ searchState }) =>
    searchState && searchState.query ? (
      <CustomHits />
    ) : //<div>No query</div>
    null
);

  return (
    <div className="ais-InstantSearch">
        <h1 class="text-5xl font-serif text-gray-200">What would you like to know?</h1>
        <div class="p-10">
          <InstantSearch indexName="dev_articles" searchClient={searchClient}>
            <div class="w-full">
              <CustomSearchBox />
              <Results />
            </div>
          </InstantSearch>
        </div>
      </div>
  )
}
export default Search;