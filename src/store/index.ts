import { createStore, createTypedHooks } from 'easy-peasy'
import storeModel, { StoreModel } from './models'

// Create typed hooks
const typedHooks = createTypedHooks<StoreModel>()
// Export typed hooks
export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState

// Create Store
const store = createStore(storeModel)

export default store
