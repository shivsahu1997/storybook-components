import React from "react";
import { Typography, Grid, Divider, styled } from "@mui/material";

interface ListItem {
  label: string;
  value: string | number;
}

export interface ListProps {
  title: string;
  items: ListItem[];
}

const VerticalLine = styled("div")({
  borderLeft: "2px solid black",
  height: "100%",
  marginLeft: "8px",
});

const List: React.FC<ListProps> = ({ title, items = [] }) => {
  return (
    <div>
      <Typography variant='h5' gutterBottom>
        {title}
        <VerticalLine />
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={6} key={item.label}>
            <Typography variant='body1'>
              <strong>{item.label} </strong>&nbsp; {item.value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
