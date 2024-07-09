import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import BackLayout from "./pages/back_office/BackLayout.js";
import NegativeCertificate from "./pages/back_office/proccess/NegativeCertificate.jsx";
import Dashboard from "./pages/back_office/Dashboard.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import Order from "./pages/back_office/Order.jsx";

function App() {
  const [isShown, setIsShown] = useState(true);
  useEffect(() => {
    setIsShown(!localStorage.getItem("token") ? true : false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="services" element={<Services />} />
          <Route path="Privacy_Policy" element={<PrivacyPolicy />} />
          <Route path="Services/Creation_Sarl" element={<CreationSarl />} />
          <Route path="Services/Creation_Sarl/Packs" element={<Packs />} />
          {isShown && <Route path="login" element={<Login />} />}
          {isShown && <Route path="reset" element={<ResetPassword />} />}
          <Route
            path="services/creation_sarl/orderConfirmed"
            element={<OrderConfirmed />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route index element={<Home />} />

        {!isShown && (
          <Route path="/app" element={<BackLayout />}>
            <Route path="/app" index element={<Dashboard />} />
            <Route path="proccess" element={<NegativeCertificate />}></Route>
            <Route path="orders" element={<Order />}></Route>
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
