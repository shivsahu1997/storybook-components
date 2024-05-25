import React from "react";
import { Story, Meta } from "@storybook/react";
import CustomButton, { CustomButtonProps } from "./BasicButton";

export default {
  title: "atoms/BasicButton",
  component: CustomButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};
