import AppDispatcher from '../dispatcher/Dispatcher'
import { Constants } from '../constants/Constants'

export function startAnimateComet(bool, scrollPos) {
  AppDispatcher.handleViewAction({
    actionType: Constants.COMET_START_ANIMATE,
    animate: bool,
    scrollPos: scrollPos
  })
}

export function stopAnimateComet(bool, scrollPos) {
  AppDispatcher.handleViewAction({
    actionType: Constants.COMET_STOP_ANIMATE,
    animate: bool,
    scrollPos: scrollPos
  })
}

export function setPositionComet(bool, scrollPos) {
  AppDispatcher.handleViewAction({
    actionType: Constants.COMET_SET_POSITION,
    scrollPos: scrollPos
  })
}

export function blurComet(bool) {
  AppDispatcher.handleViewAction({
    actionType: Constants.COMET_BLUR,
    blur: bool
  })
}

export function unblurComet(bool) {
  AppDispatcher.handleViewAction({
    actionType: Constants.COMET_UNBLUR,
    blur: bool
  })
}

export function openImage(bool, title, text) {
  AppDispatcher.handleViewAction({
    actionType: Constants.OPEN_IMAGE,
    open: bool,
    title: title,
    text: text
  })
}

export function closeImage(bool) {
  AppDispatcher.handleViewAction({
    actionType: Constants.CLOSE_IMAGE,
    close: bool
  })
}

export function explode(bool) {
  AppDispatcher.handleViewAction({
    actionType: Constants.EXPLODE,
    animate: bool
  })
}
