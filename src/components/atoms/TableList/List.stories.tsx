// List.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";
import List, { ListProps } from "./List";

export default {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const TableList = Template.bind({});
TableList.args = {
  title: "Example Title",
  items: [
    { label: "First Name", value: "Ashish" },
    { label: "Last Name", value: "Sahu" },
    { label: "Age", value: 36 },
    { label: "State", value: "US" },
    { label: "Gender", value: "Female" },
    { label: "Zipcode", value: "909090" },
    { label: "Relationship", value: "Primary" },
    { label: "Country", value: "USA" },
  ],
};
