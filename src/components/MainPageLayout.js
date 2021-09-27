import React, { memo } from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        heading="Find a Show"
        subheading="Are you looking for a TV Show or an Actor?"
      />
      <Navs />
      {children}
    </div>
  );
};

export default memo(MainPageLayout);
