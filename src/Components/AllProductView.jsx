import React, { useContext } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MyContext } from '../Contexts/ProductsContext';
import { useNavigate } from 'react-router-dom';
import './AllProductsView.css';
export default function AllProductView() {

 const {products}=useContext(MyContext);
 const navigation = useNavigate()

  return (

<>
<div className='p-box'>
      {products.map((data)=>(
           <MDBCard className='card-box' key={data.id} >
           <MDBCardImage src={data.image}/>
           <MDBCardBody>
             <MDBCardTitle>{data.price}</MDBCardTitle>
             <MDBCardText>
              {data.details}
             </MDBCardText>
             <MDBBtn onClick={()=>{navigation(`/singleview/${data.id}`)}} >View Product</MDBBtn>
           </MDBCardBody>
         </MDBCard>
      )
      
      )}
 
      </div>
    </>
  );
}