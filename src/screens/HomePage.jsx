import { useState } from "react";

import { useQuery } from "react-query";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ui/ProductCard";
import ProductDetailsDrawer from "../components/ui/ProductDetailsDrawer";
import { ProductService } from "../api/ProductService";
import useFiltersContext from "../hooks/useFiltersContext";


function Products() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState("");

  const {filters}=useFiltersContext();

  const { data, error, isLoading, isError } = useQuery(["products", filters.sort, filters.category ], () =>
    ProductService.getProducts(filters),
  );

  console.log(filters)

  const handleProductClick = (id) => {
    setDrawerOpen(true);
    setActiveProduct(id);
  };

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </Box>
    );
  if (isError) return <Box>Error: {error.message}</Box>;


  return (
    <Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        sx={{
          width: "100%",
          margin: "auto",
          px: { xs: 5, sm: 10, md: 10 },
          py: { xs: 5, sm: 10, md: 10 },
        }}
      >
        {data?.map((product) => (
          
            <ProductCard key={product.id} product={product} onClick={()=>handleProductClick(product.id)} />
         
        ))}
      </Grid>

      <ProductDetailsDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeProduct={activeProduct}
      />
    </Box>
  );
}

export default Products;
