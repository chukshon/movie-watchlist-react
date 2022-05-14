import React, { useContext, useReducer, useEffect } from 'react'
import { ADD_TO_WATCHED, ADD_TO_WATCH_LIST } from './action'
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
  return (
    <AppContext.Provider value={{ ...state, addToWatchList, addToWatched }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
