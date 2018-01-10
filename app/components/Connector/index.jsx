import React from 'react';
import { inject, observer } from 'mobx-react';
import { SegmentedControl, SegmentedControlItem, Text, Button, TextInput } from 'react-desktop/macOs';
import Connection from 'components/Connector/Connection';
import cn from 'classnames';
import { autobind } from 'core-decorators';

// @inject('connector')
// @observer
class Connector extends React.Component {
  state = {
    selected: 1,
    connection: {
    }
  }

  renderTabs() {
    console.log(`render tabs`);
    return [
      this.renderTab(1),
    ];
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({
        selected: 2
      });
    }, 500)
  }

  renderTab(key) {
    console.log(`render tab`);
    return (
         <Connection data={this.state} key={key}/>
    )
  }

  render() {
    return (
      <div>
        <SegmentedControl>
          {this.renderTabs()}
        </SegmentedControl>
      </div>
    )
  }
}

export default Connector;
