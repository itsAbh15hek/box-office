/* eslint-disable no-underscore-dangle */
import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAPI } from '../misc/config';
import ShowMainData from '../components/show/ShowMainData';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import Cast from '../components/show/Cast';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { show: action.show, isLoading: false, error: null };
    case 'FETCH_FAIL':
      return { ...prevState, error: action.error };
    default:
      return prevState;
  }
};

const Show = () => {
  const { id } = useParams();

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;
    getAPI(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(res => {
        setTimeout(() => {
          if (isMounted) {
            dispatch({ type: 'FETCH_SUCCESS', show: res });
          }
        }, 300);
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAIL', error: err.message });
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) return <div>Loading Content...</div>;

  if (error !== null) return <div>{`Error Occoured: ${error}`}</div>;

  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>
      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
