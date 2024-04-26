import { transactionDataResponses } from "../config/transactionDataResponses";

const fetchTransactionDataPromise = (txid) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const transactionData = transactionDataResponses.find(
        (resp) => resp.txid === txid
      );
      if (transactionData) {
        resolve(transactionData);
      } else {
        reject(new Error("NOT FOUND"));
      }
    }, 300);
  });

export default fetchTransactionDataPromise;
