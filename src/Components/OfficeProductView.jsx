import React, { useContext } from 'react'
import { MyContext } from '../Contexts/ProductsContext'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
function OfficeProductView() {
  const {products}=useContext(MyContext);

const OfficeFurniture = products.filter((data)=>
  data.categories==="Office"
);
const navigation = useNavigate()
  return (
    
    <>
    <div className='p-box'> 
  {OfficeFurniture.map((data)=>(
           <MDBCard className='card-box' key={data.id}>
           <MDBCardImage src={data.image}/>
           <MDBCardBody>

             <MDBCardTitle>{data.name}</MDBCardTitle>
             <MDBCardText>
              {data.price}
             </MDBCardText>
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
  )
}

export default OfficeProductView