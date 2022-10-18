import "./App.css";
// Public Pages
import Home from "./Components/Home/Home";
import Login from "./Components/Login/CustomerLogin";
import Header from "./Components/NavBar/navBar"

//Customer Management
import CustomerRegistration from "./Pages/Customer/CustomerRegister";
import ViewCart from "./Pages/Customer/ViewCart";
import WishList from "./Pages/Customer/WishList";
import AddReview from "./Pages/Customer/AddReview";
import CustomerDashboard from "./Pages/Customer/CustomerDashboard";
import CustomerProfile from "./Pages/Customer/UserProfile";
import UpdateProfile from "./Pages/Customer/UpdateProfile";


// Admin Managment
import ViewAllCustomer from "./Pages/Admin/CustomerManagement/ViewAllCustomers";
import ViewAllReview from "./Pages/Admin/ReviewManagement/ViewAllReviews";
import ViewPurchaseHistory from "./Pages/Admin/CustomerManagement/ViewPurchaseHistory";
import UpdateUserRole from "./Pages/Admin/CustomerManagement/UpdateUserRole";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/*Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/customer-login" element={<Login />} />

        {/*Customer Routes*/}
        <Route path="/customer-register" element={<CustomerRegistration />} />
        <Route path="/cart" element={<ViewCart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/customer-profile" element={<CustomerProfile />} />
        <Route path ="/customer-update-profile/:id"  element={<UpdateProfile/>} />
      

        {/*Admin Routes*/}
        <Route path="/all-review" element={<ViewAllReview />} />
        <Route path="/customer" element={<ViewAllCustomer />} />
        <Route path="/order" element={<ViewPurchaseHistory />} />
        <Route path="/review" element={<ViewAllReview />} />
        <Route path="/update/:id" element={<UpdateUserRole />} />
      </Routes>
    </Router>
  );
}

export default App;
