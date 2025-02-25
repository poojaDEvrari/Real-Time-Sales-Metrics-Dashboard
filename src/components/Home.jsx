import React from "react";
import SalesCard from "./SalesCard";
import SalesCharts from "./SalesCharts";
import SalesInventory from "./SalesInventory";

function Home() {
  return (
    <main className="main-container">
      <SalesCard />
      <SalesCharts />
      <SalesInventory/>
    </main>
  );
}

export default Home;
