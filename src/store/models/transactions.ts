import { Transaction, NewTransaction } from '../../models'
import { Action, action, Computed, computed } from 'easy-peasy'
import { v4 as uuidv4 } from 'uuid'

export interface TransactionsModel {
  items: Transaction[]
  transactions: Computed<TransactionsModel, Transaction[]>
  totalBalance: Computed<TransactionsModel, string>
  totalIncome: Computed<TransactionsModel, string>
  totalExpense: Computed<TransactionsModel, string>
  addTransaction: Action<TransactionsModel, NewTransaction>
  deleteTransaction: Action<TransactionsModel, string>
  saveTransactions: Action<TransactionsModel, void>
  loadTransactions: Action<TransactionsModel, void>
}

const transactionsModel: TransactionsModel = {
  items: [],
  /* Computed */
  transactions: computed((state) => state.items.reverse()),
  totalBalance: computed((state) => {
    return state.items.reduce((acc, t) => acc + t.amount, 0).toFixed(2)
  }),
  totalIncome: computed((state) => {
    const income = state.items.filter((t) => t.amount > 0)
    return income.reduce((acc, t) => acc + t.amount, 0).toFixed(2)
  }),
  totalExpense: computed((state) => {
    const expenses = state.items.filter((t) => t.amount < 0)
    return expenses.reduce((acc, t) => acc + t.amount, 0).toFixed(2)
  }),
  /* Actions */
  addTransaction: action((state, payload) => {
    const transaction: Transaction = {
      id: uuidv4(),
      ...payload,
    }
    state.items.push(transaction)
  }),
  deleteTransaction: action((state, payload) => {
    const index = state.items.findIndex((t) => t.id === payload)
    if (index !== -1) state.items.splice(index, 1)
  }),
  saveTransactions: action((state) => {
    /* Save state to localStorage */
    localStorage.setItem('transactions', JSON.stringify(state.items))
  }),
  loadTransactions: action((state) => {
    /* Retrieve transactions from localStorage */
    const lsTransactions = localStorage.getItem('transactions')
    if (lsTransactions) {
      const transactions = JSON.parse(lsTransactions)
      state.items = transactions.reverse()
    }
  }),
}

export default transactionsModel
