import fetchWalletDataPromise from "../sdk/fetchWalletData";
import fetchTransactionDataPromise from "../sdk/fetchTransactionData";

export const retrieveWalletAction = (address) => {
  return async (dispatch) => {
    dispatch({ type: "LOAD_WALLET_DETAILS" });
    try {
      const response = await fetchWalletDataPromise(address);
      dispatch({ type: "RETRIEVE_WALLET_DETAILS_SUCCESS", payload: response });
      const { txids } = response.txHistory;
      const promises = txids.map((txid) => fetchTransactionDataPromise(txid));
      const transactionDataResponses = await Promise.all(promises);
      transactionDataResponses.forEach((response) =>
        dispatch({
          type: "RETRIEVE_TRANSACTION_DETAILS_SUCCESS",
          payload: { [response?.txid]: response },
        })
      );
    } catch (e) {
      dispatch({
        type: "RETRIEVE_WALLET_DETAILS_FAILURE",
        payload: "Wallet Details Not Found",
      });
    }
  };
};
