import React from 'react';
import ReactDOM from 'react-dom/client';

var perf = require('0./index2.html');


const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

