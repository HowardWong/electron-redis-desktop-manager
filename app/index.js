import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';


const Component = () => (<div>hello here</div>)

const render = () => ReactDOM.render(
  <Component />,
  document.getElementById('app')
)

render()

if (module.hot) {
  module.hot.accept('./index.js', () => {
    render();
  });
}
