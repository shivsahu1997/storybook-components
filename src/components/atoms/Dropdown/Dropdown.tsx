import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";

export interface DropdownWithLabelProps {
  title: string;
  label: string | undefined;
  flabel: string | undefined;
  options: string[];
}

const VerticalLine = styled("div")({
  border: "1px solid black",
  width: "100%",
  marginTop: "20px",
  marginBottom: "50px",
});

const DropdownCenter = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const FlabelFont = styled("span")({
  fontSize: "20px",
  color: "blue",
  marginTop: "20px",
});

const HlabelFont = styled("span")({
  fontSize: "20px",
  marginBottom: "20px",
});

const Dropdown: React.FC<DropdownWithLabelProps> = ({
  title,
  label,
  flabel,
  options,
}) => {
  const defaultSelectedOption = options.length > 1 ? options[0] : null;
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultSelectedOption
  );

  const handleSelectionChange = (event: any) => {
    setSelectedOption(event.target.value as string);
  };

  console.log("selectedOption", selectedOption);

  return (
    <div>
      <Typography variant='h5' gutterBottom>
        {title}
        <VerticalLine />
      </Typography>

      <DropdownCenter>
        <HlabelFont>{label}</HlabelFont>
        <FormControl style={{ width: "20%" }}>
          <Select value={selectedOption} onChange={handleSelectionChange}>
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FlabelFont>{flabel}</FlabelFont>
      </DropdownCenter>
    </div>
  );
};

export default Dropdown;
