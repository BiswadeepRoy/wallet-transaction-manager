import { Paper } from "@mui/material";
import DataField from "./DataField";

const WalletTransactionDetailCard = ({ data }) => {

    const txnDetailCardStyles = {
        backgroundColor: "primary.main",
        color: "secondary.main"
      }

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "primary.main"
      }}
      className="txn-detail-card-wrapper"
    >
      <Paper
        elevation={1}
        sx={txnDetailCardStyles}
        className="txn-detail-card"
      >
        <DataField
          keyName="HASH"
          value={data?.hash?.toString()}
          maskLength={10}
        />
        <DataField
          keyName="VERSION"
          value={data?.version?.toString()}
          maskLength={10}
        />
        <DataField
          keyName="SIZE"
          value={data?.size?.toString()}
          maskLength={10}
        />
        <DataField
          keyName="FEES"
          value={`${data?.fee?.amount} ${data?.fee?.unit}`}
          maskLength={10}
        />
      </Paper>
      <Paper
        elevation={1}
        sx={txnDetailCardStyles}
        className="txn-detail-card"
      >
        <DataField
          keyName="ADDRESS IN"
          value={data?.vin[0].scriptSig?.address?.toString()}
          maskLength={10}
        />
        <DataField
          keyName="ADDRESS OUT"
          value={data?.vout[0].scriptPubKey?.address?.toString()}
          maskLength={10}
        />
        <DataField
          keyName="VALUE IN"
          value={data?.vin[0].value?.toString()}
          maskLength={10}
        />
        <DataField
          keyName="VALUE OUT"
          value={data?.vout[0].value?.toString()}
          maskLength={10}
        />
      </Paper>
    </Paper>
  );
};

export default WalletTransactionDetailCard;
