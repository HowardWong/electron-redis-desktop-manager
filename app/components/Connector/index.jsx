import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('connector')
@observer
class Connector extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.connector.dialog.visiable ? 1 : 0}
      </div>
    )
  }
}

export default Connector;