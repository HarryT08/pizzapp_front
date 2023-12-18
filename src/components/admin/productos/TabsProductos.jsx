import { useState } from "react";
import { TableProductos } from "@/components";
import { Tab, Tabs } from "@mui/material";

const TabsProductos = ({ searchProductos }) => {
  const [value, setValue] = useState("Productos");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Productos" value="Productos" />
      </Tabs>
      {value === "Productos" && (
        <TableProductos searchProductos={searchProductos} />
      )}
    </>
  );
};

export default TabsProductos;
