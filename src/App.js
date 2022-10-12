import "./App.css";
// Public Pages
import Home from "./Components/Home/Home";
import Login from "./Components/Login/CustomerLogin";

//Customer Management
import CustomerRegistration from "./Pages/Customer/CustomerRegister";
import ViewCart from "./Pages/Customer/ViewCart";
import WishList from "./Pages/Customer/WishList";

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
        <Route path="/login" element={<Login />} />

        {/*Customer Routes*/}
        <Route path="/register" element={<CustomerRegistration />} />
        <Route path="/cart" element={<ViewCart />} />
        <Route path="/wishlist" element={<WishList />} />

        {/*Admin Routes*/}
        <Route path="/all-customer" element={<ViewAllCustomer />} />
        <Route path="/review" element={<ViewAllReview />} />
      </Routes>
    </Router>
  );
}

export default App;
