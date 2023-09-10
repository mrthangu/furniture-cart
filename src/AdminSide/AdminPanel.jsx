import React, { useContext, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBInput,
} from "mdb-react-ui-kit";
import { MyContext } from "../Contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
    const navigation = useNavigate()
  const [fillActive, setFillActive] = useState("tab1");
  const { userData, products, setProducts,adminLogged, setAdminLogged } = useContext(MyContext);

  const HomeFurniture = products.filter((data) => data.categories === "Home");

  const OfficeFurniture = products.filter(
    (data) => data.categories === "Office"
  );

const handleAddProduct=(e)=>{
    e.preventDefault()

    const newName = e.target.name.value;
    const newImage = e.target.image.value;
    const newDetails = e.target.details.value;
    const newPrice = e.target.price.value;
    const newCategories = e.target.categories.value;
    const newId = products.length + 1;
    setProducts((d)=>d=[...products, {id:newId, image:newImage, name:newName, categories:newCategories, details:newDetails, price:newPrice, quantity: 1, }])
    alert("New Product Added Succesfully");


}


const handleDelete=(id)=>{
    const afterDelete= products.filter((data)=>
    data.id!==parseInt(id)
    )
    setProducts(afterDelete);
}

//   --------------------------------------------------------------------------------------------------------------
  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
//---------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <MDBTabs fill className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("tab1")}
            active={fillActive === "tab1"}
          >
            Admin Home
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("tab2")}
            active={fillActive === "tab2"}
          >
            Product Section
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleFillClick("tab3")}
            active={fillActive === "tab3"}
          >
            User Data
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={fillActive === "tab1"}>Tab 1 content
        
        <button onClick={()=>{navigation('/')}}> view WebSite</button>
        <button onClick={()=>{setAdminLogged(!adminLogged); navigation('/')}}>logout admin</button>
        
        
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === "tab2"}>
          <MDBRow>
            <MDBCol size="3">
              <MDBTabs className="flex-column text-center">
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab1")}
                    active={verticalActive === "tab1"}
                  >
                    Home Furniture
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab2")}
                    active={verticalActive === "tab2"}
                  >
                    Office Furniture
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick("tab3")}
                    active={verticalActive === "tab3"}
                  >
                    Add Products
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </MDBCol>
            <MDBCol size="9">
              <MDBTabsContent>
                <MDBTabsPane show={verticalActive === "tab1"}>
                  {HomeFurniture.map((data) => (
                    <MDBCard key={data.id}>
                      <MDBCardImage src={data.image} />
                      <MDBCardBody>
                        <MDBCardTitle>{data.price}</MDBCardTitle>
                        <MDBCardText>{data.details}</MDBCardText>
                        <MDBBtn onClick={()=>{navigation(`/AdminEditProduct/${data.id}`)}}>Edit</MDBBtn>
                        <MDBBtn onClick={()=>{handleDelete(data.id)}}>Delete</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  ))}
                </MDBTabsPane>
                <MDBTabsPane show={verticalActive === "tab2"}>
                  {OfficeFurniture.map((data) => (
                    <MDBCard key={data.id}>
                      <MDBCardImage src={data.image} />
                      <MDBCardBody>
                        <MDBCardTitle>{data.price}</MDBCardTitle>
                        <MDBCardText>{data.details}</MDBCardText>
                        <MDBBtn>View Product</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  ))}
                </MDBTabsPane>
                <MDBTabsPane show={verticalActive === "tab3"}>
                  <form onSubmit={handleAddProduct}>
                    <MDBInput
                      className="mb-4"
                      type="text"
                      id="name"
                      label="product name"
                    />
                    <MDBInput
                      className="mb-4"
                      type="url"
                      id="image"
                      label="product image"
                    />
                    <MDBInput
                      className="mb-4"
                      type="number"
                      id="price"
                      label="product Price"
                    />
                    <MDBInput
                      className="mb-4"
                      type="text"
                      id="categories"
                      label="product Cateories"
                    />
                    <MDBInput
                      className="mb-4"
                      type="text"
                      id="details"
                      label="product details"
                    />

                    <MDBBtn type="submit" block>
                      Add Product
                    </MDBBtn>
                  </form>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBCol>
          </MDBRow>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === "tab3"}>
          <MDBTable align="middle">
            <MDBTableHead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Password</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {userData.map((data) => (
                <tr key={data.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{data.name}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{data.email}</p>
                  </td>
                  <td>
                    <MDBBadge color="success" pill>
                      {data.password}
                    </MDBBadge>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
