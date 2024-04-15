import { Box } from '@mui/material';
import RootLayout from "./layouts/RootLayout";
import HomePage from "./screens/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index={true} element={<HomePage />} />
      </Route>,
    ),
  );

  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
