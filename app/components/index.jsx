import React from 'react';
import { Dialog, Button } from 'react-desktop/macOs';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';

import Connector from 'components/Connector';

@inject('connector')
@observer
class App extends React.Component {

  @autobind
  set_dialog() {
    this.props.connector.set_dialog({
      visiable: true
    })
  }

  render() {
    return (
      <div>
        <Connector />
        <Button onClick={this.set_dialog}>
          Connect To Redis Server
        </Button>
      </div>
    )
  }

}

export default App;