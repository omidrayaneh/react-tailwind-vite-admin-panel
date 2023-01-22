import React from "react";
import DashboardStatusBox from "../components/DashboardStatusBox";
import TransactionChart from "../components/TransactionChart";
import BuyerChart from "../components/BuyerChart";
const Dashboard =() => {
  return (
      <div className="flex flex-col gap-4">
        <DashboardStatusBox/>
        <div className="flex flex-row gap-4 w-full">
            <TransactionChart/>
            <BuyerChart/>
        </div>
      </div>
  );
}

export default Dashboard;
