import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });

      const response = await res.json();
      setOrderData(response.orderData);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          {orderData.length > 0 ? (
            orderData.map((order, index) => (
              <div key={index} className="my-4">
                {order.order_data.map((orderItem, idx) => (
                  <div key={idx}>
                    {orderItem.length > 0 && orderItem[0].Order_date ? (
                      <div className="m-auto mt-5">
                        <h4>Order Date: {orderItem[0].Order_date}</h4>
                        <hr />
                      </div>
                    ) : null}

                    <div className="d-flex flex-wrap">
                      {orderItem.map((arrayData, i) =>
                        arrayData.Order_date ? null : (
                          <div key={i} className="col-12 col-md-6 col-lg-3">
                            <div
                              className="card mt-3 mx-2"
                              style={{
                                width: "16rem",
                                maxHeight: "360px",
                                 color: "black" 
                              }}
                            >
                              <img
                                src={arrayData.img}
                                className="card-img-top"
                                alt="..."
                                style={{
                                  height: "120px",
                                  objectFit: "fill",
                                }}
                              />
                              <div className="card-body">
                                <h5 className="card-title">{arrayData.name}</h5>
                                <div
                                  className="container w-100 p-0"
                                  style={{ height: "38px" }}
                                >
                                  <span className="m-1">
                                    Quantity: {arrayData.qty}
                                  </span>
                                  <span className="m-1">
                                    Size: {arrayData.size}
                                  </span>
                                  <div
                                    className="d-inline ms-2 h-100 w-20 fs-5"
                                    style={{ color: "black" }}
                                  >
                                    ₹{arrayData.price}/-
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <h4 className="text-center">No orders found.</h4>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
