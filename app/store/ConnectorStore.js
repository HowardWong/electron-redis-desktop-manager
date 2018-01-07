import { observable, action } from 'mobx';

class Connector {
  @observable dialog = {
    visiable: false
  }

  @action.bound
  set_dialog(param) {
    this.dialog = Object.assign(this.dialog, param)
  }

}

export default Connector;