import { Story, Meta } from "@storybook/react";
import TabData, { TabProps } from "./Tab";

export default {
  title: "Components/Tab",
  component: TabData,
  tags: ["autodocs"],
} as Meta;

const Template: Story<TabProps> = (args) => <TabData {...args} />;

export const Tab = Template.bind({});
Tab.args = {
  title: "Tab 1",
};
