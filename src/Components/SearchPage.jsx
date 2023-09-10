import React, { useContext } from 'react'
import { MyContext } from '../Contexts/ProductsContext'

function SearchPage() {

    
    const {products,search,} = useContext(MyContext)
  return (
    <div>
        

<div>
{products.filter((data)=>{
    return search.toLowerCase() === "" ? null : data.name.toLowerCase().includes(search);
}).map((data)=>(
   
<p style={{cursor:'pointer'}} key={data.id}>
    {data.name}
    
    </p>
    

))}



</div>



    </div>
  )
}

export default SearchPage