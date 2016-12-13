

import AppDispatcher from '../dispatcher/Dispatcher'
import { Constants } from '../constants/Constants'
import { EventEmitter } from 'events'

let CHANGE_EVENT = 'change'

let _store = {
  isAnimated: false,
  isBlurred: false,
  scrollPos: 0
}

class CometStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getAnimated() {
    return _store
  }

}

let CometStore = new CometStoreClass()

AppDispatcher.register((payload) => {
  let action = payload.action

  switch(action.actionType) {

  case Constants.COMET_START_ANIMATE:

    _store.isAnimated = true
    _store.scrollPos = document.body.scrollTop
    CometStore.emitChange()
    break

  case Constants.COMET_STOP_ANIMATE:

    _store.isAnimated = false
    _store.scrollPos = 0
    CometStore.emitChange()
    break

  case Constants.COMET_BLUR:

    _store.isBlurred = true
    CometStore.emitChange()
    break

  case Constants.COMET_UNBLUR:

    _store.isBlurred = false
    CometStore.emitChange()
    break

  default:
    return true
  }

})

export default CometStore
