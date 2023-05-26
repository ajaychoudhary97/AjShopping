import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Gridbs from './Gridbs';
import Product from './Product';
// import AddtoCart from "./features/addToCart/AddtoCart";
import Cart from './productApp/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomButton from './CustomComponents/Buttons/CustomButton';

const App = () => {
  return (
    <div>
      
      {/* <ReactBs/> */}

      {/* <AlertBs/> */}

      {/* <Gridbs/> */}
        {/* <Product/> */}
        {/* <Cart/> */}

        {/* <AddtoCart/> */}


    <CustomButton/>
  

    {/* <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Product/>} />
      <Route path="/cart" element={ <Cart/>} />
      </Routes>
    
    </BrowserRouter> */}
    </div>


  )
}

export default App;