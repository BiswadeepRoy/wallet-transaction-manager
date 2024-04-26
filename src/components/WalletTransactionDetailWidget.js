import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WalletTransactionDetailCard from "./WalletTransactionDetailCard";

const WalletTransactionDetailWidget = ({ id, data }) => {
  const [maskedTransactionId, setMaskedTransactionId] = React.useState();

  React.useEffect(() => {
    setMaskedTransactionId(
      id.length > 24
        ? `${id.substring(0, 12)}...${id.substring(id.length - 12, id.length)}`
        : id
    );
  }, [id]);

  return (
    <Accordion sx={{ backgroundColor: "background.default", color: "secondary.main" }} className="txn-detail-accordion">
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon sx={{color: "secondary.main"}}/>}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography variant="subtitle2" sx={{ fontWeight: "bolder" }}>
          {maskedTransactionId}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <WalletTransactionDetailCard id={id} data={data} />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default WalletTransactionDetailWidget;
