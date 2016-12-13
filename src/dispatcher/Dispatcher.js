import { Dispatcher } from 'flux'

class DispatcherClass extends Dispatcher {

  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
}

let AppDispatcher = new DispatcherClass()

export default AppDispatcher
