import React from 'react';
import Hamburger from './Hamburger';


function HelloWorld() {
  return (
    <>
      <Hamburger classname="hamburger" onClick={Toggle}/>
      <h3>Hello World</h3>
    </>
  );
};

export default HelloWorld;
