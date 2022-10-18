import "./App.css";
// Public Pages
import Home from "./Components/Home/Home";

//Customer Management
import CustomerRegistration from "./Pages/Customer/CustomerRegister";

// Admin Managment
import ViewAllCustomer from "./Pages/Admin/CustomerManagement/ViewAllCustomers";
import ViewAllOrders from "./Pages/Admin/OrderManagement/ViewAllOrders"
import ProcessOrder from "./Pages/Admin/OrderManagement/ProcessOrder"
import OrderReport from "./Pages/Admin/OrderManagement/OrderReport"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/*Public Routes */}
        <Route path="/" element={<Home />} />

        {/*Customer Routes*/}
        <Route path="/register" element={<CustomerRegistration />} />

        {/*Admin Routes*/}
        <Route path="/all-customer" element={<ViewAllCustomer />} />
        <Route path="/all-orders" element={<ViewAllOrders />} />
        <Route path="/process/:id" element={<ProcessOrder />} />
        <Route path="/order-report" element={<OrderReport />} />
        

      </Routes>
    </Router>
  );
}

export default App;
