import React, { useState } from "react";
import Sidebar from "../components/CustomerProfile/Sidebar";
import Profile from "../components/CustomerProfile/Profile";
import Orders from "../components/CustomerProfile/Orders";
import Pancard from "../components/CustomerProfile/Pancard";
import DeliveryLocation from "../components/CustomerProfile/DeliveryLocation";
import Giftcard from "../components/CustomerProfile/Giftcard";
const CustomerProfile = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "orders":
        return <Orders />;
      case "delivery-location":
        return <DeliveryLocation />;
      case "pan-card":
        return <Pancard />;
      case "gift-card":
        return <Giftcard />;
      default:
        return <Profile />;
    }
  };
  return (
    <div className="CustomerProfile">
      <div className="flex">
        <Sidebar setActiveSection={setActiveSection} />
        <div className="profile-content ml-5 mt-5 w-full">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
