import { useReducer } from 'react'
import AppReducer from './AppReducer'
import initialState from './initialState'

const GlobalProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
}

export default GlobalProvider