// Button.stories.js
import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./BasicButton";

storiesOf("Button", module).add("with text", () => (
  <Button onClick={() => alert("Button clicked")}>Click me</Button>
));
