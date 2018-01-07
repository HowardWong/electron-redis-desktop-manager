import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import { AppContainer } from 'react-hot-loader';

import App from 'components';
import 'asset/less/index.less';
import store from 'store/index';

const render = Component => {
  ReactDOM.render(
    (
      <Provider { ...store }>
        <Component />
      </Provider>
    ),
    document.getElementById('app')
  );
}

// redner & hot-reload
render(App)
if (module.hot) {
  module.hot.accept('./index.js', () => {
    render(App);
  });
}
