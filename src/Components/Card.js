import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../features/cartSlice";
export default function App() {
  const items = useSelector((state) => state.allcart.items);
  const dispatch = useDispatch();
  return (
    <MDBContainer>
      <MDBRow className="mb-3">
        {(items || []).map((item) => (
          <MDBCol size="4" key={item.Id}>
            <MDBCard className="mt-3" id="card">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage src={item.Img} className='img-fluid shadow-4' alt="iphone" />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{item.Title}</MDBCardTitle>
                <MDBCardText>{item.Description}</MDBCardText>
                <h5> Price: {item.PRICE}₹</h5>
                <MDBBtn href="#" onClick={() => dispatch(addtocart(item))}>
                  Add to Cart
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
        
      </MDBRow>
    </MDBContainer>
  );
}
