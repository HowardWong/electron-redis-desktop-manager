import React from 'react';
import { Dialog, Button } from 'react-desktop/macOs';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';

import Connector from 'components/Connector';

@observer
class Child extends React.Component {

  render() {
    console.log(`children render`);
    return null
  }
  
}

@inject('connector')
@observer
class App extends React.Component {

  state = {
    a: 1
  }
  @autobind
  set_dialog() {
    this.props.connector.set_dialog({
      visiable: true
    });
  }

  componentDidMount() {
    // this.setState({
    //   a: 2
    // });
    setTimeout(() => {
      this.set_dialog();
    }, 1000);
  }

  render() {
    console.log(`parent render`, this.props.connector.dialog, this.props.connector.a);
    return (
      <div id="app">
        <Child />
      </div>
    )
  }

}

export default App;
