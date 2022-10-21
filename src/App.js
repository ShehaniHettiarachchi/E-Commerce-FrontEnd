import "./App.css";
// Public Pages
import Home from "./Components/Home/Home";
import Login from "./Components/Login/CustomerLogin";

//Customer Management
import CustomerRegistration from "./Pages/Customer/CustomerRegister";
import ViewCart from "./Pages/Customer/ViewCart";
import WishList from "./Pages/Customer/WishList";
import AddReview from "./Pages/Customer/AddReview";


// Admin Managment
import ViewAllCustomer from "./Pages/Admin/CustomerManagement/ViewAllCustomers";
import ViewAllReview from "./Pages/Admin/ReviewManagement/ViewAllReviews";
import ViewPurchaseHistory from "./Pages/Admin/CustomerManagement/ViewPurchaseHistory";
import ViewSingleOrder from "./Pages/Admin/OrderManagement/ViewOrder";
import ViewAllOrders from "./Pages/Admin/OrderManagement/ViewAllOrders";
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
        <Route path="/add-review" element={<AddReview />} />

        {/*Admin Routes*/}
        <Route path="/all-review" element={<ViewAllReview />} />
        <Route path="/customer" element={<ViewAllCustomer />} />
        <Route path="/order" element={<ViewPurchaseHistory />} />
        <Route path="/orders" element={<ViewAllOrders />} />
        <Route path="/review" element={<ViewAllReview />} />
        <Route path="/orderid/:id" element={<ViewSingleOrder />} />

      </Routes>
    </Router>
  );
}

export default App;
