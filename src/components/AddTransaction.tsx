import {useState, useContext} from 'react'
import GlobalContext from '../context/GlobalContext'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction }: any = useContext(GlobalContext)

  const onSubmit = (e: any) => {
    e.preventDefault()

    const newTransaction = {
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Enter text..." 
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(Number.parseInt(e.target.value))} 
            placeholder="Enter amount..." 
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
