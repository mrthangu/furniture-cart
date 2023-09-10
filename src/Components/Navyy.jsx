import React, {  useContext, useState } from "react";
import { NavLink} from "react-router-dom";
import "./Navyy.css";
import Searchbar from "./Searchbar";

import { MyContext } from "../Contexts/ProductsContext";
import SearchPage from "./SearchPage";





function Navyy() {

  // const {logStatus,setLogStatus} = useContext(LoginContext)
  const {loginStatus,setLoginStatus} = useContext(MyContext);
  const {cart} = useContext(MyContext);
  const {setSearch,search} = useContext(MyContext);


  const handleClick = () => setClick(!click);

  const [click, setClick] = useState(false);

     
  
return (
  <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          FurniRush
          
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>


          <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
               Home
              </NavLink>
            </li>



            <li className="nav-item">
              <NavLink
                exact
                to="/AllProducts"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
               All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/HomeFurniture"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
                Hommy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to='/OfficeFurniture'
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
               Offy
              </NavLink>
            </li>

{(loginStatus)  ? ( <li className="nav-item">
              <NavLink
                exact
                to='/'
                activeClassName="active"
                className="nav-links"
                onClick={() => setLoginStatus(!loginStatus)}
                >
               Logout
              </NavLink>
            </li> ):(    <li className="nav-item">
              <NavLink
                exact
                to='/Registration'
                activeClassName="active"
                className="nav-links"
                
                >
                Registration
              </NavLink>
            </li>)}

            
                {cart.length>0  && loginStatus ? <li className="nav-item">
              <NavLink
                exact
                to='/AddToCart'
                activeClassName="active"
                className="nav-links"
                
                >    <i class="cis-cart">🛒<sup>{cart.length}</sup></i>    </NavLink>
            </li> : null}
            
            {/* <form action="">

<input type="text" placeholder="Search Items" onChange={(e)=>setSearch(e.target.value)} /><button>🔍</button>


            </form> */}
           

       <Searchbar/>
               




              </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navyy;
