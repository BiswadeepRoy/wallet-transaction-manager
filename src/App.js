import HeaderBar from "./components/HeaderBar";
import SearchBox from "./components/SearchBox";
import config from "./config/config";
import WalletTransactionDetails from "./components/WalletTransactionDetailsList";

function App() {
  const { headerText } = config;
  return (
    <div className="App">
      <HeaderBar headerText={headerText} />
      <SearchBox />
      <WalletTransactionDetails />
    </div>
  );
}

export default App;
