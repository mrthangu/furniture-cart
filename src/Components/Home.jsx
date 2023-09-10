import React, { useContext } from 'react'


import './Home.css';
import { MyContext } from '../Contexts/ProductsContext';
import { useNavigate } from 'react-router-dom';

import Footer from './Footer';



function Home() {

  const {products, setProducts} = useContext(MyContext)
  const featured= products.filter((data)=>(
      data.categories==="featured"
  ))
const navigation=useNavigate()

  return (
<>
{/* <main><section class="sc-iBPRYJ cOWINi section-center"><article class="content"><h1>Handcrafted <br/>With Care</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, praesentium.</p><a class="btn hero-btn" href="/products">Shop now</a></article><article class="small-hero"><img src="/static/media/brush-stroke-banner-6.28a8ab0e.svg" alt="paint brush" class="svg"/></article><article class="img-container"><img src="/static/media/hero.854b2e90.jpg" alt="hero background" class="main-img"/></article></section><section class="sc-gKsewC gnwqMi section"><div class="title"><h2>Featured Products</h2><div class="underline"></div></div><div class="section-center featured"><article class="sc-jSgupP ckDfJz"><div class="container"><img src="https://i.imgur.com/tqRiKFI.jpg" alt="comfortable &amp; chic sofa"/><a class="link" href="/product/5ohewhhewrkj"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></a></div><footer><h5>comfortable &amp; chic sofa</h5><p>799,99&nbsp;€</p></footer></article><article class="sc-jSgupP ckDfJz"><div class="container"><img src="https://i.imgur.com/ZOhGjEs.jpg" alt="wooden frame bed"/><a class="link" href="/product/7lnjejrewhrkjw"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></a></div><footer><h5>wooden frame bed</h5><p>899,99&nbsp;€</p></footer></article><article class="sc-jSgupP ckDfJz"><div class="container"><img src="https://i.imgur.com/DMDLDdS.jpg" alt="comfortable salon set"/><a class="link" href="/product/15ljlk234"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></a></div><footer><h5>comfortable salon set</h5><p>1.799,99&nbsp;€</p></footer></article></div></section><section class="sc-fubCfw irPtrP"><div class="section-center"><article class="header"><h3>More about our company</h3></article><div class="services-center"><article class="service"><span class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span><h4>Mission</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fuga quis perferendis.</p></article><article class="service"><span class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg></span><h4>Vision</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, hic.</p></article><article class="service"><span class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg></span><h4>History</h4><p>Similique modi, quidem quae quas explicabo necessitatibus sint eius beatae officiis ut!</p></article><article class="service"><span class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg></span><h4>Designers</h4><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></article></div></div></section><section class="sc-eCssSg hmocIu"><div class="section-center"><h3>Sign up for our newsletter</h3><div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nam laboriosam quod tempore nulla, veniam 20% off! Doloribus soluta debitis at atque delectus autem?</p><form class="contact-form"><input type="email" class="form-input" placeholder="Enter email" name="_replyto"/><button type="submit" class="submit-btn">Subscribe</button></form></div></div></section></main> */}
{/* <section class="sc-iBPRYJ cOWINi section-center"><article class="content"><h1>Handcrafted <br/>With Care</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, praesentium.</p><a class="btn hero-btn" href="/products">Shop now</a></article><article class="small-hero"><img src="https://furniture-store-reactjs.netlify.app/static/media/brush-stroke-banner-6.28a8ab0e.svg" alt="paint brush" class="svg"/></article><article class="img-container"><img src="https://furniture-store-reactjs.netlify.app/static/media/hero.854b2e90.jpg" alt="hero background" class="main-img"/></article></section> */}


<div className='main-box'>


<div class="product-center"><img src="https://inspiring-rosalind-d587a9.netlify.app/images/undraw_chilling_8tii.svg" alt=""/><section class="content-prod"><div><h1> Design Your Comfort Zone.</h1><p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus, voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur tempora cumque. Ut quo enim vero odio minus nostrum eveniet,</p></div><a href="/"><button class="btn">Order Now</button></a></section></div>
<br />
<br />
<br />

<h2 style={{textAlign: "center"}}>Featured Products</h2>
<div className="gallery-container">
  {featured.map((data) => (
    <div key={data.id} className="gallery-item" >
      <div className="gallery-content">
        <img src={data.image} onClick={()=>{navigation(`/singleview/${data.id}`)}}  />
        <p>{data.name}</p>
      </div>
    </div>
  ))}
</div>








</div>





<br /><br />








<Footer/>

    </>
  )
}

export default Home