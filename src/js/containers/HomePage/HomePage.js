import React, { Component, useRef, useEffect, useState } from 'react';
import useGlobalState from '@hooks/useGlobalState';
import { Helmet } from "react-helmet"; 

import GiantHero from '@Components/GiantHero';

const Page = (props) => {
  const [theme, setTheme] = useGlobalState('tree');

  useEffect(() => {
  });

  return (
    <>
      <Helmet>
        <title>My Site</title>
        <meta name="description" content="Site" />
      </Helmet>
 
      <div>
        { theme }
        <GiantHero>
          hello
        </GiantHero>
      </div>
    </>
  );
}

export default Page;
