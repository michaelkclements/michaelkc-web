

import AppDispatcher from '../dispatcher/Dispatcher';
import { Constants } from '../constants/Constants';
import { EventEmitter } from 'events';

let CHANGE_EVENT = 'change';

let _store = {
  isVisible: false,
  image: 'ipaddrawing',
  title: '',
  text: '',
  url: ''
}

class ImageStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getVisibility() {
    return _store;
  }

}

let ImageStore = new ImageStoreClass();

AppDispatcher.register((payload) => {
  let action = payload.action;

  switch(action.actionType) {

  case Constants.OPEN_IMAGE:

    _store.isVisible = true;
    ImageStore.emitChange();
    break;

  case Constants.CLOSE_IMAGE:

    _store.isVisible = false;
    ImageStore.emitChange();
    break;

  default:
    return true;
  }

})

export default ImageStore;
