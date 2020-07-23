import React, { FC } from 'react'
/* Components */
import Balance from '../../components/Balance'
import IncomeExpenses from '../../components/IncomeExpenses'
import TransactionList from '../../components/TransactionList'
import AddTransaction from '../../components/AddTransaction'


const Home: FC = () => {
  return (
    <>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </>
  )
}

export default Home
