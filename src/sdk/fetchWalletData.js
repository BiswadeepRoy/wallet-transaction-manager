import { walletDataResponse } from "../config/walletDataResponse";

const fetchWalletDataPromise = (address) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (walletDataResponse?.validateaddress?.address === address) {
        resolve(walletDataResponse);
      } else {
        reject(new Error("NOT FOUND"));
      }
    }, 300);
  });

export default fetchWalletDataPromise;
