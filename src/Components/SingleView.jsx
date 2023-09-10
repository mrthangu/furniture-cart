import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../Contexts/ProductsContext";
import "./SingleView.css";
function SingleView() {



  
  const navigation = useNavigate();
  const { products, cart, setCart } = useContext(MyContext);
  const { loginStatus, setLoginStatus } = useContext(MyContext);
  const { id } = useParams();
  const singleProduct = products.filter((data) => data.id === parseInt(id));
  const handleClick = () => {
    if (loginStatus) {
      if (cart.includes(singleProduct[0])) {
        alert("Already added in cart");
      } else {
        setCart(() => [...cart, ...singleProduct]);
      }
    } else {
      alert("Please Login");
    }
  };
  const handleClicktwo = () => {
    if (!loginStatus) {
      alert("Please Login");
     
      
    } else {
      navigation('/AddToCart');
    }
  };

  return (
    <>
      <div className="super">
        {singleProduct.map((data) => (
          <>
            <div className="box-one">
              <img id="simg" src={data.image} alt="" />
              <br />
              
            </div>
            <div className="box-two">
              <h3>

                {data.name}
              </h3>
              
            <span role="img" aria-label="star">
                ⭐⭐⭐⭐⭐     (276+ user Ratings)
              </span>
              <br/>

          <p >{data.details}</p>

          <p> Category : {data.categories}</p>
          <p>QTY: {data.quantity}</p>
          
          <h4>${Math.round(data.price)}.00</h4>




              <button onClick={handleClick}>Add to Cart</button>

              <button
                onClick={handleClicktwo}
              >
                buy now
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default SingleView;
