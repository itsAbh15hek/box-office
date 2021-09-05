import styled from 'styled-components';
import FadeIn from 'react-fade-in';

export const FlexGrid = styled(FadeIn)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SearchCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;

  .img-wrapper {
    width: 100%;
    border-radius: 40px;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;

export const StyledShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #000;
      color: #000;
      &:hover {
        text-decoration-color: blue;
        color: blue;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const StyledActorCard = styled(SearchCard)`
  .deathday {
    margin: 0;
    margin-top: 15px;
    font-weight: bold;
  }
`;
export const Star = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${props => (props.active ? '#ffc806' : '#ddd')};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;
