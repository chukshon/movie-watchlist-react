import {
  ADD_TO_WATCHED,
  ADD_TO_WATCH_LIST,
  REMOVE_FROM_WATCHED,
  REMOVE_FROM_WATCHLIST,
  MOVE_TO_WATCHLIST,
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
      watchList: state.watchList.filter(
        (movie) => movie.id !== action.payload.id
      ),
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
  if (action.type === MOVE_TO_WATCHLIST) {
    return {
      ...state,
      watched: state.watched.filter((e) => {
        return e.id !== action.payload.id
      }),
      watchList: [action.payload, ...state.watchList],
    }
  }
  throw new Error(`no such action : ${action.type}`)
}

export default reducer
