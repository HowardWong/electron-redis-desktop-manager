import { observable, action } from 'mobx';

class Connector {
  @observable a = {

  }
  @observable dialog = {
    visiable: false
  }

  @action.bound
  set_dialog(param) {
    // this.dialog = Object.assign(this.dialog, param)
    this.dialog = param;
    this.a = {
      test: 1
    };
  }

}

export default Connector;
