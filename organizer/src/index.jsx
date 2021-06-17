import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home/index';
import Ideas from './pages/Ideas/index';

ReactDOM.render(
  <React.StrictMode>
    {<Home />,
    <Ideas />}
  </React.StrictMode>,
  document.getElementById('root')
);
