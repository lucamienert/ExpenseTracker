import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { numberWithCommas } from '../helper/numberHelper'

export const Balance = () => {
  const { transactions }: any = useContext(GlobalContext)

  const amounts = transactions.map((transaction: any) => transaction.amount)
  const total = amounts.reduce((acc: any, item: any) => (acc += item), 0).toFixed(2)

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </>
  )
}
