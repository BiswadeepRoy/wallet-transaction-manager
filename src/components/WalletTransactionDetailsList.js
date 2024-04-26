import { useSelector } from "react-redux";
import WalletTransactionDetailWidget from "./WalletTransactionDetailWidget";
import { Paper } from "@mui/material";
import DataField from "./DataField";
import config from "../config/config";

const WalletTransactionDetails = () => {
  const {
    isLoading: isWalletLoading,
    data: walletData,
    error: walletError,
  } = useSelector((state) => state.wallet);
  const { data: transactionsData } = useSelector((state) => state.transactions);

  const renderWalletDetails = (walletData) => {
    const walletDetailsStyles = {
      backgroundColor: "background.default",
      color: "secondary.main",
    }
    return (
      <>
        <h5>{config.summaryText}</h5>
        <Paper
          sx={walletDetailsStyles}
          className="wallet-details-paper"
        >
          <DataField
            keyName="ENCODING"
            value={walletData.encoding.toString()}
          />
          <DataField
            keyName="TRANSACTIONS"
            value={walletData.txHistory?.txCount.toString()}
          />
          <DataField
            keyName="BALANCE"
            value={`${walletData.txHistory?.balanceSat} BTC`}
          />
        </Paper>
        <h5>{config.technicalDetailsText}</h5>
        <Paper
          sx={walletDetailsStyles}
          className="wallet-details-paper"
        >
          <DataField
            keyName="VERSION"
            value={walletData.base58?.version.toString()}
          />
          <DataField
            keyName="HASH 160"
            value={walletData.base58?.hash.toString()}
          />
          <DataField
            keyName="SCRIPT PUB KEY"
            value={walletData.validateaddress?.scriptPubKey.toString()}
          />
          <DataField
            keyName="SCRIPT HASH"
            value={walletData.electrumScripthash.toString()}
          />
        </Paper>
        <h5>{`${walletData.txHistory?.txCount.toString()} Transactions`}</h5>
      </>
    );
  };

  const renderTransactionsDetailsWidget = (transactionsData) => {
    if (transactionsData) {
      return Object.keys(transactionsData).map((txid) => (
        <WalletTransactionDetailWidget
          key={txid}
          id={txid}
          data={transactionsData[txid]}
        />
      ));
    }
  };

  return (
    <div className="wallet-details-list">
      {isWalletLoading ? (
        <h3>{config.loadingText}</h3>
      ) : walletData ? (
        <>
          <h3>{renderWalletDetails(walletData)}</h3>
          {renderTransactionsDetailsWidget(transactionsData)}
        </>
      ) : (
        <h3>{walletError}</h3>
      )}
    </div>
  );
};

export default WalletTransactionDetails;
