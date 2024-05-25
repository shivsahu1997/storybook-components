import { Story, Meta } from "@storybook/react";
import Dropdown, { DropdownWithLabelProps } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} as Meta;

const Template: Story<DropdownWithLabelProps> = (args) => (
  <Dropdown {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Set Risk Tolerance",
  label: "Investment Style",
  flabel: "Or take Risk Tolerance questionnaire",
  options: ["Aggressive", "Moderate", "Conservative"],
};
