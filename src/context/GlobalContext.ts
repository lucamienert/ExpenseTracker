import { createContext } from 'react'
import initialState from './initialState'

const GlobalContext = createContext(initialState)

export default GlobalContext