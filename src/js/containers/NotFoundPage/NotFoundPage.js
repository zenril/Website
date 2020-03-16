import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import ReactDOM from 'react-dom';

const NotFoundPage = (props) => {
  return (
    <>
      <Helmet>
        <title>My Site</title>
        <meta name="description" content="Site" />
      </Helmet>
      <div>
        Not found
      </div>
    </>
  );
}

export default NotFoundPage;
