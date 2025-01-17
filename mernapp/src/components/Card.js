import React, { useEffect, useState, useRef } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOption = Object.keys(options);
  let foodItem = props.item;

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOption[0]); 
  
  const handleAddToCard = async () => {

   let food = [];
   for (const item of data) {
     if (item.id === foodItem._id) {
       food = item;

       break;
     }
   }
   console.log(food);
   console.log(new Date());
   if (food.length !== 0) {
     if (food.size === size) {
       await dispatch({
         type: "UPDATE",
         id: foodItem._id,
         price: finalPrice,
         qty: qty,
       });
       return;
     } else if (food.size !== size) {
       await dispatch({
         type: "ADD",
         id: foodItem._id,
         name: foodItem.name,
         price: finalPrice,
         qty: qty,
         size: size,
         img: props.ImgSrc,
       });
       console.log("Size different so simply ADD one more to the list");
       return;
     }
     return;
   }


    await dispatch({
      type: "ADD",
      id: foodItem._id,
      name: foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: foodItem.img,
    });
    console.log(data);
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div
        className="card mt-3 bg-black"
        style={{ width: "19rem", maxHeight: "360px" }}
      >
        <img
          src={foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{foodItem.name}</h5>

          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              ref={priceRef}
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOption.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr></hr>
          <div
            className="btn btn-success justify-center ms-2"
            onClick={handleAddToCard}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}
