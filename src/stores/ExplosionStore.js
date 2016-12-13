import AppDispatcher from '../dispatcher/Dispatcher'
import { Constants } from '../constants/Constants'
import { EventEmitter } from 'events'

let CHANGE_EVENT = 'change'

let _store = {
  isExploded: false
}

class ExplosionStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getExploded() {
    return _store
  }

}

let ExplosionStore = new ExplosionStoreClass()

AppDispatcher.register((payload) => {
  let action = payload.action

  switch(action.actionType) {

  case Constants.EXPLODE:

    _store.isExploded = true
    ExplosionStore.emitChange()
    break

  default:
    return true
  }

})

export default ExplosionStore
