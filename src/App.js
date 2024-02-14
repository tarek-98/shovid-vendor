import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layuut";
import Home from "./pages/Home";
import ProductSinglePage from "./pages/ProductSinglePage";
import Categories from "./pages/Categories";
import CategoryProductPage from "./pages/CategoryProductPage";
import Profile from "./pages/Profile";
import Terms from "./pages/Terms";
import VendorProfile from "./pages/VendorProfile";
import VendorLogin from "./pages/VendorLogin";
import VendorSignup from "./pages/VendorSignup";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div className="d-center d-flex">
      <div className="App col-12 col-lg-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/product/:id" element={<ProductSinglePage />} />
              <Route path="/categories" element={<Categories />} />
              <Route
                path="/categories/:category"
                element={<CategoryProductPage />}
              />
              <Route path="/account" element={<Profile />} />
              <Route path="/login" element={<VendorLogin />} />
              <Route path="/signup" element={<VendorSignup />} />
              <Route path="/vendorprofile" element={<VendorProfile />} />
              <Route path="/vendorprofile/editInfo" element={<EditProfile />} />
              <Route path="/terms" element={<Terms />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
