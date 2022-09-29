import "./App.css";
// Public Pages
import Home from "./Components/Home/Home";

//Customer Management
import CustomerRegistration from "./Pages/Customer/CustomerRegister";

// Admin Managment
import ViewAllCustomer from "./Pages/Admin/CustomerManagement/ViewAllCustomers";
import ViewAllReview from "./Pages/Admin/ReviewManagement/ViewAllReviews"

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
        <Route path="/all-review" element={<ViewAllReview />} />
      </Routes>
    </Router>
  );
}

export default App;
