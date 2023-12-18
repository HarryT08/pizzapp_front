import { useContext, useState, useEffect } from "react";
import { ProductContext } from "@/context/productos/ProductContext";
import { IngredienteContext } from "@/context/ingredientes/IngredientesContext";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { labelDisplayedRows, labelRowsPerPage } from "@/i18n";
import { Alerta } from "@/components";
import { toast } from "react-toastify";

const columns = [
  { id: "nombre", label: "Nombre" },
  { id: "acciones", label: "Acciones" },
];

const TableIngredientesProductos = ({ listaCostoTamanio = [] }) => {
  const [pageIngredientesProductos, setPageIngredientesProductos] = useState(0);
  const [rowsIngredientesProductos, setRowsIngredientesProductos] = useState(3);
  const {
    producto,
    preparaciones,
    setPreparaciones,
    setListaIngredientesSeleccionados,
  } = useContext(ProductContext);
  const { ingredientes } = useContext(IngredienteContext);

  const handleChangePageIngredientesProductos = (event, newPage) => {
    setPageIngredientesProductos(newPage);
  };

  const handleChangeRowsPerPageIngredientesProductos = (event) => {
    setRowsIngredientesProductos(Number(event.target.value));
    setPageIngredientesProductos(0);
  };

  // Agregar ingrediente a la preparación
  const addIngrediente = (id) => {
    if (listaCostoTamanio.length === 0) {
      toast.error("Debe seleccionar un tamaño.");
      return;
    }

    if (preparaciones.some((preparacion) => preparacion.id_materia === id)) {
      toast.error("El ingrediente ya ha sido agregado.");
      return;
    }

    const ingrediente = ingredientes.find(
      (ingrediente) => ingrediente.id === id
    );

    setListaIngredientesSeleccionados((current) => current.concat(ingrediente));
  };

  useEffect(() => {
    if (preparaciones.length === 0) {
      return;
    }

    const newTamanioPreparaciones = listaCostoTamanio.filter((tamanio) => {
      return !preparaciones.some(
        (preparacion) => preparacion.tamanio === tamanio
      );
    });

    console.log("Tamanios nuevos =>", newTamanioPreparaciones);

    const nuevasPreparaciones = preparaciones.flatMap((preparacion) => {
      return newTamanioPreparaciones.map((tamanio) => ({
        ...preparacion,
        tamanio,
      }));
    });

    setPreparaciones((current) => [...current, ...nuevasPreparaciones]);

    console.log("Nuevas preparaciones =>", newTamanioPreparaciones);
    console.log("Nuevas preparaciones en objetos =>", nuevasPreparaciones);
  }, [listaCostoTamanio]);

  console.log(preparaciones);

  return (
    <Box
      sx={{
        minWidth: 300,
        my: "0.5rem",
      }}
    >
      {ingredientes.length === 0 ? (
        <Alerta alerta="info" descripcion="No hay ingredientes disponibles." />
      ) : (
        <>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align="center">
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredientes
                .slice(
                  pageIngredientesProductos * rowsIngredientesProductos,
                  pageIngredientesProductos * rowsIngredientesProductos +
                    rowsIngredientesProductos
                )
                .map((ingrediente) => (
                  <TableRow hover key={ingrediente.id}>
                    <TableCell align="center">{ingrediente.nombre}</TableCell>
                    <TableCell align="center">
                      <Button
                        type="button"
                        variant="outlined"
                        onClick={() => addIngrediente(ingrediente.id)}
                      >
                        Agregar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            rowsPerPageOptions={[3, 5, 10]}
            count={ingredientes.length}
            rowsPerPage={rowsIngredientesProductos}
            page={pageIngredientesProductos}
            onPageChange={handleChangePageIngredientesProductos}
            onRowsPerPageChange={handleChangeRowsPerPageIngredientesProductos}
            labelRowsPerPage={labelRowsPerPage}
            labelDisplayedRows={labelDisplayedRows}
          />
        </>
      )}
    </Box>
  );
};

export default TableIngredientesProductos;
