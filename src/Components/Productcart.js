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
      <section class="h-100 gradient-custom">
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Total-Items:{cart.length}</h5>
                </div>
                <div class="card-body">
                  {(cart || []).map((data) => (
                    <div class="row">
                      <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          class="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={data.Img}
                            class="w-100"
                            alt="Blue Jeans Jacket"
                          />
                          <a href="#!">
                            <div
                              class="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                      </div>

                      <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{data.Title}</strong>
                        </p>
                        <p>{data.Description}</p>

                        <button
                          type="button"
                          class="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => dispatch(removeFromCart(data.Id))}
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>

                      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div class="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          <button
                            class="btn btn-primary px-3 me-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            onClick={() => dispatch(decreament(data.Id))}

                          >
                            <i class="fas fa-minus"></i>
                          </button>

                          <div class="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={data.Quantity}
                              type="number"
                              class="form-control"
                            />
                            <label class="form-label" for="form1">
                              Quantity
                            </label>
                          </div>

                          <button
                            class="btn btn-primary px-3 ms-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            onClick={() => dispatch(increament(data.Id))}
>
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>

                        <p class="text-start text-md-center">
                          <strong>{data.PRICE}₹</strong>
                        </p>
                      </div>
                    </div>
                  ))}

                  <hr class="my-4" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Summary</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      TotalQuantity
                      <span>{totalQuantity}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
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
                    class="btn btn-primary btn-lg btn-block"
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
