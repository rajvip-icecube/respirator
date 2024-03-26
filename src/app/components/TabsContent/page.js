import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function TabsContent() {
  return (
    <div className="product info detailed">
      <div className="product data items mage-tabs-disabled" role="tablist">
        <Tabs>
          <Tab eventKey="Details" title="Details">
            Details
          </Tab>
          <Tab eventKey="More Information" title="More Information">
            Tab content for Profile
          </Tab>
          <Tab eventKey="Reviews" title="Reviews">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="Delivery Information" title="Delivery Information">
            Tab content for Loooonger Tab
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
