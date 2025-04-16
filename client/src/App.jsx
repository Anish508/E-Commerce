import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/Layout";
import AdminDashboar from "./pages/admin-view/Dashboard";
import AdminFeatures from "./pages/admin-view/Features";
import AdminOrders from "./pages/admin-view/Orders";
import AdminProducts from "./pages/admin-view/Product";
import ShoppingLayout from "./components/shoping-view/Layout";
import NotFound from "./pages/Not-Found";
import ShoppingHome from "./pages/shoping-view/Home";
import ShoppingListing from "./pages/shoping-view/Listing";
import ShoppingCheckout from "./pages/shoping-view/Checkout";
import ShoppingAccount from "./pages/shoping-view/Account";
import CheckAuthentication from "./components/Common/CheckAuth";
import UnAuthPage from "./pages/unauth-page/Index";

function App() {
  const isAuthenticated = false;
  const user = null
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header components</h1>

      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuthentication isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuthentication>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuthentication isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuthentication>
          }
        >
          <Route path="dashboard" element={<AdminDashboar />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        <Route
          path="/shop"
          element={
            <CheckAuthentication isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuthentication>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        <Route path="/unauth-page" element={<UnAuthPage/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
