import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import 'antd-mobile/dist/antd-mobile.css';
import "./index.scss";

const render = App => {
  ReactDOM.render(<App/>,
    document.getElementById('root')
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./root', () => {
    let NextRoot = require('./root').default;
    render(NextRoot);
  });
}