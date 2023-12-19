import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { DashboarLayout } from "@/components";
import {
  Inicio,
  Productos,
  AgregarProductos,
  Bebidas,
  AgregarBebidas,
  Ordenes,
  Cuentas,
  Mesas,
  Facturar,
  Factura,
} from "@/pages";
import {
  INDEX_ADMIN,
  INICIO_ADMIN,
  PRODUCTOS_ADMIN,
  AGREGAR_PRODUCTO_ADMIN,
  BEBIDAS_ADMIN,
  EDITAR_BEBIDA_ADMIN,
  AGREGAR_BEBIDA_ADMIN,
  ORDENES_ADMIN,
  CUENTAS_ADMIN,
  MESAS_ADMIN,
  FACTURAR_ADMIN,
  FACTURA_ADMIN,
  EDITAR_PRODUCTO_ADMIN,
} from "@/routes/paths";
import { OrdenesProvider } from "@/context/ordenes/OrdenesContext";
import { ProductProvider } from "@/context/productos/ProductContext";
import { CuentasProvider } from "@/context/cuentas/CuentasContext";

const DashboardAdmin = () => {
  return (
    <DashboarLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth="xl">
          <Routes>
            <Route
              path={INDEX_ADMIN}
              element={
                <ProductProvider>
                  <Inicio />
                </ProductProvider>
              }
            />
            <Route
              path={INICIO_ADMIN}
              element={
                <ProductProvider>
                  <Inicio />
                </ProductProvider>
              }
            />
            <Route
              path={PRODUCTOS_ADMIN}
              element={
                <ProductProvider>
                  <Productos />
                </ProductProvider>
              }
            />
            <Route
              path={AGREGAR_PRODUCTO_ADMIN}
              element={
                <ProductProvider>
                  <AgregarProductos />
                </ProductProvider>
              }
            />
            <Route
              path={EDITAR_PRODUCTO_ADMIN}
              element={
                <ProductProvider>
                  <AgregarProductos />
                </ProductProvider>
              }
            />
            <Route
              path={EDITAR_BEBIDA_ADMIN}
              element={
                <ProductProvider>
                  <AgregarBebidas />
                </ProductProvider>
              }
            />
            <Route
              path={AGREGAR_BEBIDA_ADMIN}
              element={
                <ProductProvider>
                  <AgregarBebidas />
                </ProductProvider>
              }
            />
            <Route
              path={BEBIDAS_ADMIN}
              element={
                <ProductProvider>
                  <Bebidas />
                </ProductProvider>
              }
            />
            <Route
              path={ORDENES_ADMIN}
              element={
                <OrdenesProvider>
                  <Ordenes />
                </OrdenesProvider>
              }
            />
            <Route
              path={CUENTAS_ADMIN}
              element={
                <CuentasProvider>
                  <Cuentas />
                </CuentasProvider>
              }
            />
            <Route path={MESAS_ADMIN} element={<Mesas />} />
            <Route path={FACTURAR_ADMIN} element={<Facturar />} />
            <Route path={`${FACTURA_ADMIN}/:id`} element={<Factura />} />
          </Routes>
        </Container>
      </Box>
    </DashboarLayout>
  );
};

export default DashboardAdmin;
