import { ADD_TO_WATCHED, ADD_TO_WATCH_LIST, TEST } from './action'

const reducer = (state, action) => {
  if (action.type === TEST) {
    return {
      ...state,
    }
  }
  if (action.type === ADD_TO_WATCH_LIST) {
    return {
      ...state,
      watchList: [action.payload, ...state.watchList],
    }
  }
  if (action.type === ADD_TO_WATCHED) {
    return {
      ...state,
      watched: [action.payload, ...state.watched],
    }
  }
  throw new Error(`no such action : ${action.type}`)
}

export default reducer
