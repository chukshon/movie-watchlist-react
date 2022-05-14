import {
  ADD_TO_WATCHED,
  ADD_TO_WATCH_LIST,
  REMOVE_FROM_WATCHED,
  REMOVE_FROM_WATCHLIST,
} from './action'

const reducer = (state, action) => {
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
  if (action.type === REMOVE_FROM_WATCHED) {
    return {
      ...state,
      watched: state.watched.filter((e) => {
        return e.id !== action.payload
      }),
    }
  }

  if (action.type === REMOVE_FROM_WATCHLIST) {
    return {
      ...state,
      watchList: state.watchList.filter((e) => {
        return e.id !== action.payload
      }),
    }
  }
  throw new Error(`no such action : ${action.type}`)
}

export default reducer
