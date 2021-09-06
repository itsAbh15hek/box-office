import React, { memo } from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ heading, subheading }) => {
  return (
    <TitleWrapper>
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </TitleWrapper>
  );
};

export default memo(Title);
