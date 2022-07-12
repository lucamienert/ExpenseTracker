import { useReducer } from 'react'
import AppReducer from './AppReducer'
import initialState from './initialState'
import axios from 'axios'
import GlobalContext from './GlobalContext'

const GlobalProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const getTransactions = async () => {
        try {
            const res = await axios.get('/api/transactions')

            dispatch({
                type: 'GET_TRANSACTION',
                paylaod: res.data.data
            })
        } catch(err: Error | any) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    const deleteTransaction = async (id: number) => {
        try {
            const res = await axios.delete(`/api/transactions/${id}`)

            dispatch({
                type: 'DELETE_TRANSACTION',
                paylaod: res.data.data
            })
        } catch(err: Error | any) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    const addTransaction = async (transaction: any) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post(`/api/transactions/`, transaction, config)

            dispatch({
                type: 'ADD_TRANSACTION',
                paylaod: res.data.data
            })
        } catch(err: Error | any) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    return (
        <GlobalContext.Provider 
            value={{
                transactions: state.transactions,
                error: state.error,
                loading: state.loading,
                getTransactions,
                deleteTransaction,
                addTransaction
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider