import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { getAPI } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isSearchShows = searchOption === 'shows';
  const inputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    getAPI(`/search/${searchOption}?q=${input}`)
      .then(response => response.json())
      .then(result => {
        setResults(result);
      });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) onSearch();
  };
  const showResults = () => {
    if (results && results.length === 0) return <div>No Results</div>;
    if (results && results.length > 0)
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    return null;
  };
  const radioChange = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for somehing..."
        onChange={inputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            type="radio"
            id="shows-search"
            value="shows"
            checked={isSearchShows}
            onChange={radioChange}
          />
        </label>

        <label htmlFor="people-search">
          Actors
          <input
            type="radio"
            id="people-search"
            value="people"
            checked={!isSearchShows}
            onChange={radioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {showResults()}
    </MainPageLayout>
  );
};

export default Home;
