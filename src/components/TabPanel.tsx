import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = props => {
  const { children, value, index, ...other } = props;

  return (
    <div role="panel" hidden={value !== index} {...other}>
      {value === index && (children)}
    </div>);
};

export default TabPanel;
