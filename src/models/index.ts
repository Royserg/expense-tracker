export interface Transaction {
  id: string,
  description: string,
  amount: number,
}

export type NewTransaction = Omit<Transaction, 'id'>
