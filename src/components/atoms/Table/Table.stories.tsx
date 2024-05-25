import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TextField,
  TablePagination,
  IconButton,
  styled,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const BoldTableCell = styled(TableCell)({
  fontWeight: "bold",
});

const SkyBlueTableCell = styled(TableCell)({
  color: "skyblue",
});

export default {
  title: "atoms/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    rows: {
      control: {
        type: "array",
      },
    },
    columns: {
      control: {
        type: "array",
      },
    },
  },
} as Meta;

const Template: Story<{ rows: string[][]; columns: string[] }> = ({
  rows,
  columns,
}) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {columns.length > 0 &&
            columns.map((column, index) => (
              <BoldTableCell key={index}>{column}</BoldTableCell>
            ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            {row.map((cell, cellIndex) => (
              <SkyBlueTableCell key={cellIndex}>{cell}</SkyBlueTableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export const simpleTable = Template.bind({});
simpleTable.args = {
  rows: [
    ["John", "30", "USA"],
    ["Alice", "25", "Canada"],
    ["Bob", "35", "UK"],
  ],
  columns: ["Name", "Age", "Country"],
};

const FilterTable: Story<{ rows: string[][]; columns: string[] }> = ({
  rows,
  columns,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <TextField
        label='Search'
        variant='outlined'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <BoldTableCell key={index}>{column}</BoldTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .filter(
              (row, index) =>
                index !== 0 &&
                row.some((cell) =>
                  cell.toLowerCase().includes(searchTerm.toLowerCase())
                )
            )
            .map((row, index) => (
              <TableRow key={index}>
                {row.map((cell, cellIndex) => (
                  <SkyBlueTableCell key={cellIndex}>{cell}</SkyBlueTableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const FilterTables = FilterTable.bind({});
FilterTables.args = {
  rows: [
    ["Name", "Age", "Country"],
    ["John", "30", "USA"],
    ["Alice", "25", "Canada"],
    ["Bob", "35", "UK"],
  ],
  columns: ["Name", "Age", "Country"],
};

const Paginated: Story<{ rows: string[][]; columns: string[] }> = ({
  rows,
  columns,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const handleSort = (key: any) => {
    let direction = "ascending";
    if (
      sortConfig.key === key &&
      sortConfig.direction &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedRows = rows.sort((a, b) => {
    if (sortConfig.key !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <div>
      <TextField
        label='Search'
        variant='outlined'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <BoldTableCell key={index}>
                {column}
                <IconButton onClick={() => handleSort(index)}>
                  {sortConfig.key === index &&
                    (sortConfig.direction === "descending" ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    ))}
                </IconButton>
              </BoldTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows
            .filter((row) =>
              row.some((cell) =>
                cell.toLowerCase().includes(searchTerm.toLowerCase())
              )
            )
            .slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)
            .map((row, index) => (
              <TableRow key={index}>
                {row.map((cell, cellIndex) => (
                  <SkyBlueTableCell key={cellIndex}>{cell}</SkyBlueTableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component='div'
        count={sortedRows.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export const PaginatedTable = Paginated.bind({});
PaginatedTable.args = {
  rows: [
    ["John", "30", "USA"],
    ["Alice", "25", "Canada"],
    ["Bob", "35", "UK"],
    ["John", "30", "USA"],
    ["Alice", "25", "Canada"],
    ["Bob", "35", "UK"],
  ],
  columns: ["Name", "Age", "Country"],
};
