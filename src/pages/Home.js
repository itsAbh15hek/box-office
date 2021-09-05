import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import CustomRadio from '../components/CustomRadio';
import { getAPI } from '../misc/config';
import { useLastQuery } from '../misc/customHooks';
import {
  RadioInputsWrapper,
  SearchInput,
  SearchButtonWrapper,
} from './Home.styled';

const Home = () => {
  const [input, setInput] = useLastQuery('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isSearchShows = searchOption === 'shows';
  const inputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    getAPI(`/search/${searchOption}?q=${input}`).then(result => {
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
      <SearchInput
        type="text"
        placeholder="Search for somehing..."
        onChange={inputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isSearchShows}
            onChange={radioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="people-search"
            value="people"
            checked={!isSearchShows}
            onChange={radioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {showResults()}
    </MainPageLayout>
  );
};

export default Home;
