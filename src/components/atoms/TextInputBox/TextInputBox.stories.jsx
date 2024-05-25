import TextInputBox from "./TextInputBox";

export default {
  title: "atoms/InputBox",
  component: TextInputBox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    helperText: { control: "text" },
  },
};

const Template = (args) => <TextInputBox {...args} />;

export const InputBox = Template.bind({});
InputBox.args = {
  label: "Text Input",
  placeholder: "Enter text",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: "Text Input",
  helperText: "Helper text goes here",
};
