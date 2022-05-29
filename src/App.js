import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import ListCar from "./pages/ListCar/ListCar";
import DetailCar from "./pages/DetailCar/DetailCar";
import Rental from "./pages/Rental/Rental";
import AddCar from "./pages/AddCar/AddCar";
import Invoice from "./pages/Invoice/Invoice";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return(
    <>
      <Routes>
        <Route path="/">
        <Route index element={<Rental />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="listcar" element={<ListCar />} />
            <Route path="add_car" element={<AddCar />} />
            <Route path="detail/:id" element={<DetailCar />} />
            <Route path= "invoice" element={<Invoice />} />
            <Route path="Rental" element={<Rental />} />
        </Route>
      </Routes>
    </>
  )
}
export default App;