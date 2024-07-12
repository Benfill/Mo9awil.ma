import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/App.css";
import hasAccessToPack from "./utils/accessRestriction.js";
import { lazy, useState, useEffect } from "react";
import Layout from "./pages/front_office/layout.js";
import Home from "./pages/front_office/Home.jsx";
import Services from "./pages/front_office/Services";
import PrivacyPolicy from "./pages/front_office/PrivacyPolicy.js";
import CreationSarl from "./pages/front_office/CreationSarl.js";
import Packs from "./pages/front_office/payment/Packs.js";
import Login from "./pages/auth/Login.jsx";
import NotFound from "./components/front_office/NotFound.jsx";
import PaymentProcess from "./pages/front_office/payment/Checkout.jsx";
import OrderConfirmed from "./pages/front_office/payment/OrderConfirmed.jsx";
import BackLayout from "./components/back_office/BackLayout.jsx";
import Dashboard from "./pages/back_office/dashboard";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import Order from "./pages/back_office/Order.jsx";
import Register from "./pages/auth/Register.jsx";
import { Proccess } from "./pages/back_office/proccess";
import Cookies from "js-cookie";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isShown, setIsShown] = useState(true);
  useEffect(() => {
    setIsShown(!Cookies.get("token") ? true : false);
  }, []);

  useEffect(() => {
    const direction = localStorage.getItem("direction");

    if (direction) {
      setTimeout(localStorage.removeItem("direction"), 10000);
    }
  }, [isShown]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="services" element={<Services />} />
          <Route path="Privacy_Policy" element={<PrivacyPolicy />} />
          <Route path="Services/Creation_Sarl" element={<CreationSarl />} />
          <Route path="Services/Creation_Sarl/Packs" element={<Packs />} />
          {isShown && <Route path="login" element={<Login />} />}
          {isShown && <Route path="register" element={<Register />} />}
          {isShown && <Route path="reset" element={<ResetPassword />} />}
          <Route
            path="services/creation_sarl/orderConfirmed"
            element={<OrderConfirmed />}
          />
          <Route path="404" element={<NotFound />} />
        </Route>
        <Route index element={<Home />} />

        {!isShown && (
          <Route
            path="/app"
            element={
              <BackLayout
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
              />
            }
          >
            <Route index element={<Dashboard />} />
            <Route
              path="proccess"
              element={
                <Proccess
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              }
            />
            <Route path="orders" element={<Order />} />
          </Route>
        )}

        <Route
          path="Services/Creation_Sarl/checkout"
          element={<PaymentProcess />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
