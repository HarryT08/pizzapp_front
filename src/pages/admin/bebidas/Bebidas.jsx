import { useState, useContext } from "react";
import { ProductContext } from "@/context/productos/ProductContext";
import { Link } from "react-router-dom";
import {
  Button,
  Stack,
  SvgIcon,
  OutlinedInput,
  Card,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import { MdAdd, MdOutlineSearch } from "react-icons/md";
import { Header, TableBebidas } from "@/components";

const Bebidas = () => {
  const [search, setSearch] = useState("");
  const { products, methodsProducts, handleCreate, setIsBedida } =
    useContext(ProductContext);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"), {
    defaultMatches: true,
    noSsr: false,
  });
  const limpiarCampos = () => {
    methodsProducts.reset({});
    handleCreate();
  };
  console.log(products)
  const isBebidas = products.filter((product) => product.esBebida === true);

  const searchProductos = () => {
    return isBebidas.filter((product) => {
      return (
        search === "" ||
        product.nombre.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Stack spacing={1}>
          <Header title="Bebidas" subtitle="Administrar bebidas." />
        </Stack>
        <div>
          <Link
            to="/admin/bebidas/agregar"
            onClick={() => {
              limpiarCampos();
              setIsBedida(true);
            }}
          >
            <Button
              sx={{
                fontSize: smUp ? "1rem" : "0.75rem",
              }}
              startIcon={
                <SvgIcon fontSize="small">
                  <MdAdd />
                </SvgIcon>
              }
              variant="contained"
            >
              Agregar
            </Button>
          </Link>
        </div>
      </Stack>
      <Card sx={{ p: 2 }}>
        <OutlinedInput
          defaultValue={search}
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar bebida por nombre"
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon color="action" fontSize="small">
                <MdOutlineSearch />
              </SvgIcon>
            </InputAdornment>
          }
          sx={{ maxWidth: 500 }}
        />
      </Card>
      <TableBebidas searchProductos={searchProductos} />
    </Stack>
  );
};

export default Bebidas;
