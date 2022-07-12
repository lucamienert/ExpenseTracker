import React, { useContext, useEffect } from 'react'
import { Transaction } from './Transaction'

import GlobalContext from '../context/GlobalContext'

export const TransactionList = () => {
  const { transactions, getTransactions }: any = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: any) => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
}
