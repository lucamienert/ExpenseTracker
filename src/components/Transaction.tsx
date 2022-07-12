import React, {useContext} from 'react'
import GlobalContext from '../context/GlobalContext'
import { numberWithCommas } from '../helper/numberHelper'

export const Transaction = ({ transaction }: any) => {
  const { deleteTransaction }: any = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}
