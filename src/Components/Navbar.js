import React, { useEffect } from "react";
import { MDBContainer, MDBNavbar, MDBBtn, MDBIcon ,MDBCol} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getCartTotal} from "../features/cartSlice"
// import { GiHamburgerMenu } from "react-icons/gi";



export default function Navbar() {
  const { cart, totalQuantity} = useSelector((state) => state.allcart);
    const dispatch = useDispatch()
    useEffect(()=>{
  dispatch(getCartTotal())
    },[cart])

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBIcon fab icon="amazon" className="logo" />

        <MDBBtn color="light" rippleColor="dark">
          <Link to="/">
            <MDBIcon fab icon="product-hunt" />
            My Products
          </Link>
        </MDBBtn>
        <MDBBtn color="dark">
          <Link to="shoppingcart">
            <MDBIcon fas icon="shopping-cart" />
            CART({totalQuantity})
          </Link>
        </MDBBtn>
        {/* <MDBCol className="GiHamburgerMenu ">
          <GiHamburgerMenu/>
        </MDBCol> */}
      </MDBContainer>
    </MDBNavbar>
  );
}
