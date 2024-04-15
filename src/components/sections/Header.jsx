import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchField from "../ui/SearchField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import CategorySelect from "../ui/CategorySelect";
import { Button } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import useFiltersContext from "../../hooks/useFiltersContext";

const Header = ({ isNavBarAtTop }) => {
  const CustomAppBar = styled(AppBar)(({ theme }) => ({
    transition: theme.transitions.create(["box-shadow", "transform"], {
      duration: theme.transitions.duration.standard,
    }),
    boxShadow: isNavBarAtTop ? "none" : theme.shadows[3],
  }));
  
 const {filters, setFilters}=useFiltersContext();

  return (
    <Box>
      <CustomAppBar color="default">
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            py: { xs: 2, sm: 4, md: 0 },
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor:"#f5f5f5",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              py: { sm: 0, md: 3 },
              fontSize: {
                md: "2rem",
                xs: "1rem",
              },
            }}
          >
            Products
          </Typography>
          <Box
            sx={{display: "flex", flexDirection: {xs:"column", md:"row"}, gap: 2, alignItems: "baseline"}}
          >
            <SearchField />
       
          <Button variant="ghost" title="Sort" endIcon={filters.sort==='asc'?<ArrowDownward/>:<ArrowUpward />}
          onClick={()=>setFilters({...filters, sort:filters.sort==='asc'?'desc':'asc'})}
          >Sort</Button>
            <CategorySelect />
          </Box>
          <ShoppingCartIcon />

        </Box>
      </CustomAppBar>

    
    </Box>
  );
};

export default Header;