import fetchTransactionDataPromise from "../sdk/fetchTransactionData";

export const retrieveTransactionAction = (txid) => {
  return async (dispatch) => {
    dispatch({ type: "LOAD_TRANSACTION_DETAILS" });
    try {
      const response = await fetchTransactionDataPromise(txid);
      dispatch({
        type: "RETRIEVE_TRANSACTION_DETAILS_SUCCESS",
        payload: { [txid]: response },
      });
    } catch (e) {
      dispatch({
        type: "RETRIEVE_TRANSACTION_DETAILS_FAILURE",
        payload: "Transaction Details Not Found",
      });
    }
  };
};
