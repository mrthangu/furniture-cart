import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { totalproducts } from "./Components/Productslist";
import { MyContext } from "./Contexts/ProductsContext";
import SingleView from "./Components/SingleView";
import Home from "./Components/Home";
import HomeProductView from "./Components/HomeProductView";
import OfficeProductView from "./Components/OfficeProductView";
import CartView from "./Components/CartView";
import { DummyUser } from "./Components/DummyUser";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import AdminPanel from "./AdminSide/AdminPanel";
import AdminEditProduct from "./AdminSide/AdminEditProduct";
import { LoginContext } from "./Contexts/LoginContext";
import Allproducts from "./Components/Allproducts";

import Navyy from "./Components/Navyy";

function App() {
  const [products, setProducts] = useState(totalproducts);
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState(DummyUser);
  const [loginStatus, setLoginStatus] = useState(false);
  const [logStatus,setLogStatus] = useState(true);
  const [search,setSearch] = useState(' ');
  const [adminLogged, setAdminLogged] = useState(false);

  return (
    <div>
      <LoginContext.Provider value={{logStatus,setLogStatus}}>
      <MyContext.Provider
        value={{
          products,
          setProducts,
          cart,
          setCart,
          userData,
          setUserData,
          loginStatus,
          setLoginStatus,
          adminLogged,
          setAdminLogged,
          search,
          setSearch
        }}
        >
        <Navyy/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AllProducts" element={<Allproducts/>}></Route>
          <Route path="/singleview/:id" element={<SingleView />}></Route>
          <Route path="/HomeFurniture" element={<HomeProductView />}></Route>
          <Route
            path="/OfficeFurniture"
            element={<OfficeProductView />}
          ></Route>
      
            <Route path="/AddToCart" element={<CartView />}></Route>

        
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          {adminLogged ? (
            <Route path="/AdminPanel" element={<AdminPanel />}></Route>
          ) : null}

          <Route
            path="/AdminEditProduct/:id"
            element={<AdminEditProduct />}
          ></Route>
        </Routes>
      </MyContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
