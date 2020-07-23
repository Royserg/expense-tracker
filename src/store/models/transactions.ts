import { Transaction, NewTransaction } from '../../models'
import { Action, action, Computed, computed } from 'easy-peasy'

export interface TransactionsModel {
  items: Transaction[],
  recentTransactions: Computed<TransactionsModel, Transaction[]>,
  totalBalance: Computed<TransactionsModel, string>,
  totalIncome: Computed<TransactionsModel, string>,
  totalExpense: Computed<TransactionsModel, string>,
  addTransaction: Action<TransactionsModel, NewTransaction>,
  deleteTransaction: Action<TransactionsModel, string>,
}

/* Dummy data */
const dummyTransactions = [
  {
    id: '1',
    description: 'Dummy Transaction 1',
    amount: -199.9,
  },
  {
    id: '2',
    description: 'My side project',
    amount: 25,
  },
  {
    id: '3',
    description: 'Got little extra something',
    amount: 50,
  },
  {
    id: '4',
    description: 'A coffee',
    amount: -15,
  },
  {
    id: '5',
    description: 'Lunch at work',
    amount: -75,
  }
]

const transactionsModel: TransactionsModel = {
  items: dummyTransactions,
  /* Computed */
  recentTransactions: computed((state) => state.items.slice(-4)),
  totalBalance: computed((state) => {
    return state.items.reduce((acc, t) => acc + t.amount, 0).toFixed(2)
  }),
  totalIncome: computed((state) => {
    const income = state.items.filter(t => t.amount > 0)
    return income.reduce((acc, t) => acc + t.amount, 0).toFixed(2)
  }),
  totalExpense: computed((state) => {
    const expenses = state.items.filter(t => t.amount < 0)
    return expenses.reduce((acc, t) => acc + t.amount, 0).toFixed(2)
  }),
  /* Actions */
  addTransaction: action((state, payload) => {
    const transaction: Transaction = {
      id: String(Math.random() * 27),
      ...payload,
    }
    state.items.push(transaction)
  }),
  deleteTransaction: action((state, payload) => {
    const index = state.items.findIndex(t => t.id === payload)
    if (index !== -1) state.items.splice(index, 1)
  })
}

export default transactionsModel
