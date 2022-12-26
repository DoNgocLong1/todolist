import React from "react";
import { Tabs } from "antd";
interface IDisplay {
  children?: React.ReactNode ;
  tab1?: React.ReactNode;
  tab2?: React.ReactNode;
  tab3?: React.ReactNode;
}
const Display = ({ children, tab1 = [], tab2, tab3 }: IDisplay) => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: `List`,
        key: "1",
        children: tab1,
      },
      {
        label: `Grid`,
        key: "2",
        children: tab2,
      },
      {
        label: `Calender`,
        key: "3",
        children: tab3,
      },
    ]}
  />
);

export default Display;
