import React, { FC } from 'react'
import Balance from '../../components/Balance'
import IncomeExpenses from '../../components/IncomeExpenses'
import TransactionList from '../../components/TransactionList'
import AddTransaction from '../../components/AddTransaction'

const Home: FC = () => {
  return (
    <>
      <Balance />
      <IncomeExpenses expense={12.9} income={50.0}/>
      <TransactionList />
      <AddTransaction />
    </>
  )
}

export default Home
