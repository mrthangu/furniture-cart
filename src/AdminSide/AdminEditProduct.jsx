import React, { useContext } from 'react'
import {MDBInput,MDBBtn } from "mdb-react-ui-kit";
import { MyContext } from '../Contexts/ProductsContext';
import { useNavigate, useParams } from 'react-router-dom';

function AdminEditProduct() {

    const {products,setProducts}=useContext(MyContext);
    const navigation= useNavigate();
    const {id}=useParams();
    const productToEdit= products.filter((data)=>data.id===parseInt(id))
    const handleEditProduct=(e)=>{

e.preventDefault()
const newName = e.target.name.value || productToEdit[0].name ;
const newImage = e.target.image.value || productToEdit[0].image;
const newDetails = e.target.details.value || productToEdit[0].details;
const newPrice = e.target.price.value || productToEdit[0].price;
const newCategories = e.target.categories.value || productToEdit[0].categories;
const updatedProduct=products.map((data)=>{
    if (data.id===parseInt(id)) {
        return {...products, id:productToEdit[0].id, image:newImage, name:newName, categories:newCategories, details:newDetails, price:newPrice, quantity: 1, }
        
    }else{
        return data
    }
})

setProducts(updatedProduct)
alert("Product edited Succesfully");
navigation('/AdminPanel');

    }


  return (
    <div>
        

        <form onSubmit={handleEditProduct}>
                
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
                      Edit Product
                    </MDBBtn>
                  </form>





    </div>
  )
}

export default AdminEditProduct