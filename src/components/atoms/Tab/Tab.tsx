import { Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

export interface TabProps {
  title: string;
}

const TabData: React.FC<TabProps> = ({ title }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='simple tabs example'>
        <Tab title='Tab 1' />
        <Tab title='Tab 2' />
        <Tab title='Tab 3' />
      </Tabs>
      <Typography>Tab {value + 1} content</Typography>
    </div>
  );
};

export default TabData;
