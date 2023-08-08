import style from "./style/AppStyle.css";
import EarningCard from "./components/EarningCard";
import SupportTracker from "./components/SupportTracker";
import SourceTable from "./components/SourceTable";
import CountryTable from "./components/CountryTables";
import MonthlySales from "./components/MonthlySales";
import EarningDashboard from "./components/EarningDashboard";
import RevenueCard from "./components/RevenueCard";
import SalesOverview from "./components/SalesOverview";
import Form from "./components/Form";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="mySideBar">
        <Sidebar />
      </div>
      <div className="sideContainer">
        <div className="trafficDiv">
          <Form />
          <SourceTable />
        </div>
        <div className="tableSales">
          <CountryTable />
          <EarningDashboard />
          <MonthlySales />
        </div>
        <div className="salesOverview">
          <RevenueCard />
          <SalesOverview />
        </div>
        <div className="earningDiv">
          <EarningCard />
          <SupportTracker />
        </div>
      </div>
    </>
  );
}

export default App;
