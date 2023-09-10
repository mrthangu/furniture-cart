import React, { useContext } from 'react'
import { MyContext } from '../Contexts/ProductsContext'
import { useNavigate } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';


function HomeProductView() {


const {products}=useContext(MyContext)

const HomeFurniture = products.filter((data)=>
data.categories==="Home"

);
const navigation = useNavigate()

  return (
  <>
  <div className='p-box'> 
  {HomeFurniture.map((data)=>(
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

export default HomeProductView