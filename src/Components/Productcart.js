import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCartTotal , removeFromCart,increament,decreament } from "../features/cartSlice";

const Productcart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  },[cart]);

  return (
    <div>
      <section ClassName="h-100 gradient-custom">
        <div ClassName="container py-5">
          <div ClassName="row d-flex justify-content-center my-4">
            <div ClassName="col-md-8">
              <div ClassName="card mb-4">
                <div ClassName="card-header py-3">
                  <h5 ClassName="mb-0">Total-Items:{cart.length}</h5>
                </div>
                <div ClassName="card-body">
                  {(cart || []).map((data) => (
                    <div ClassName="row">
                      <div ClassName="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          ClassName="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={data.Img}
                            ClassName="w-100"
                            alt="Blue Jeans Jacket"
                          />
                          <a href="#!">
                            <div
                              ClassName="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                      </div>

                      <div ClassName="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{data.Title}</strong>
                        </p>
                        <p>{data.Description}</p>

                        <button
                          type="button"
                          ClassName="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => dispatch(removeFromCart(data.Id))}
                        >
                          <i ClassName="fas fa-trash"></i>
                        </button>
                      </div>

                      <div ClassName="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div ClassName="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          <button
                            ClassName="btn btn-primary px-3 me-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            onClick={() => dispatch(decreament(data.Id))}

                          >
                            <i ClassName="fas fa-minus"></i>
                          </button>

                          <div ClassName="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={data.Quantity}
                              type="number"
                              ClassName="form-control"
                            />
                            <label ClassName="form-label" for="form1">
                              Quantity
                            </label>
                          </div>

                          <button
                            ClassName="btn btn-primary px-3 ms-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            onClick={() => dispatch(increament(data.Id))}
>
                            <i ClassName="fas fa-plus"></i>
                          </button>
                        </div>

                        <p ClassName="text-start text-md-center">
                          <strong>{data.PRICE}₹</strong>
                        </p>
                      </div>
                    </div>
                  ))}

                  <hr ClassName="my-4" />
                </div>
              </div>
            </div>
            <div ClassName="col-md-4">
              <div ClassName="card mb-4">
                <div ClassName="card-header py-3">
                  <h5 ClassName="mb-0">Summary</h5>
                </div>
                <div ClassName="card-body">
                  <ul ClassName="list-group list-group-flush">
                    <li ClassName="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      TotalQuantity
                      <span>{totalQuantity}</span>
                    </li>

                    <li ClassName="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        {totalPrice}₹
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    ClassName="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productcart;
