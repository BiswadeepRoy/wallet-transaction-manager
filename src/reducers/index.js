import { combineReducers } from "redux";
import walletReducer from "./walletReducer";
import transactionsReducer from "./transactionsReducer";

const rootReducer = combineReducers({
  wallet: walletReducer,
  transactions: transactionsReducer
});

export default rootReducer;
