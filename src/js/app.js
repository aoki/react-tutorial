import React from 'react';
import ReactDom from 'react-dom';

window.App = {
  render: () => {
    ReactDom.render(
        <p>Hello world!!</p>,
        document.getElementById('root')
    );
  }
};
