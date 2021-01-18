import React from "react"

import { shallowEqual, useSelector } from 'react-redux';

const Results = () => {
  const hits = [...useSelector((state) => state.hits, shallowEqual)]; // make copy

  return (
    <div class="h-screen bg-blue-500">
      <header class="content-start max-h-20">
        <h1 class="text-7xl font-serif text-gray-200 py-3">Search Results</h1>
      </header>
      <div class="flex flex-wrap flex-col place-self-center pt-10">
        <ul class="content-end">
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
      </div>
    </div>
  )
}
export default Results;