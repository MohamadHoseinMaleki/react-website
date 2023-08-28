import React from "react";
import BasicTabs from "./BasicTabs";
import Footer from "./Footer";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-28 py-4 flex-grow">
        <BasicTabs />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
 