import React, { useContext, useReducer, useEffect } from 'react'
import {
  ADD_TO_WATCHED,
  ADD_TO_WATCH_LIST,
  REMOVE_FROM_WATCHED,
  REMOVE_FROM_WATCHLIST,
  MOVE_TO_WATCHLIST,
} from './action'
import reducer from './reducer'

const localWatchList = localStorage.getItem('watchlist')
const localWatched = localStorage.getItem('watched')

const initialState = {
  watchList: localWatchList
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  watched: localWatched ? JSON.parse(localStorage.getItem('watched')) : [],
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchList))
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  const addToWatchList = (movie) => {
    dispatch({ type: ADD_TO_WATCH_LIST, payload: movie })
  }
  const addToWatched = (movie) => {
    dispatch({ type: ADD_TO_WATCHED, payload: movie })
  }
  const removeFromWatched = (id) => {
    dispatch({ type: REMOVE_FROM_WATCHED, payload: id })
  }
  const removeFromWatchList = (id) => {
    dispatch({ type: REMOVE_FROM_WATCHLIST, payload: id })
  }
  const moveToWatchList = (movie) => {
    dispatch({ type: MOVE_TO_WATCHLIST, payload: movie })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        addToWatchList,
        addToWatched,
        removeFromWatchList,
        removeFromWatched,
        moveToWatchList,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
