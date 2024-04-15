import { useContext } from "react";
import FiltersContext from "../contexts/FiltersContext";

const useFiltersContext = () => useContext(FiltersContext);
export default useFiltersContext 