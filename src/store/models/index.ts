import transactionsModel, { TransactionsModel } from './transactions'
import auditModel, { AuditModel } from './audit'

export interface StoreModel {
  transactions: TransactionsModel,
  audit: AuditModel,
}

const storeModel: StoreModel = {
  transactions: transactionsModel,
  audit: auditModel,
}

export default storeModel