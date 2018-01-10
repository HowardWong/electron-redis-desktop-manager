import React from 'react';
import { inject, observer } from 'mobx-react';
import { TextInput } from 'react-desktop/macOs'
import { autobind } from 'core-decorators';


// @inject('connector')
// @observer
class Connection extends React.Component {

  shouldComponentUpdate(nextProps) {
    console.log('nextProps', nextProps);
    return true;
  }
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', this.props.data, newProps);
  }

  render() {
    console.log('connection render', this.props);
    return (
      <div>
        sadfsdaf
      </div>
    )
  }
}

export default Connection;
