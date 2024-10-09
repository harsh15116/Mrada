import React, {useEffect, useState} from "react";
import Navbar from '../Navbar';
import Card from '../Card';
import Footer from "../Footer";
import Carousal from "../Carousal";

export default function Home() {
  const[search, setSearch]=useState("");
 const [foodCat, setFoodCat]=useState([]);
 const [foodItem, setFoodItem] = useState([]);

 
  const loadData =async ( )=>{
    let response =await fetch("http://localhost:5000/api/foodData",{
      method: "POST",
      headers: {
        'content-Type': 'application/json'
      }
    });
   
    response = await response.json();
   setFoodItem(response[0]);
   setFoodCat(response[1]);
   console.log(response[0],response[1])

  }
  useEffect(()=>{
    loadData()
  },[])
  
  return (
    <>
      <div>
        <Navbar />
        </div>
        <div>
        <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "80vh" }}>
          <div
            className="carousel-caption  d-md-block"
            style={{
              position: "center",
              zIndex: 2,
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80vh",

              textAlign: "center",
              padding: "10px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              {/* <button className="btn btn-success" type="submit">
                Search
              </button> */}
            </div>
          </div>
          <div style={{ filter: "brightness(65%)" }}>
            <div className="carousel-item active">
              <img
                src="https://foodish-api.com/images/rice/rice26.jpg"
                className="d-block w-100"
                alt="..."
                style={{
                  width: "100vh", // Image width matches carousel width
                  height: "100vh", // Image height matches carousel height
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://foodish-api.com/images/burger/burger17.jpg"
                className="d-block w-100"
                alt="..."
                style={{
                  width: "100vh", // Image width matches carousel width
                  height: "100vh", // Image height matches carousel height
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://foodish-api.com/images/dessert/dessert34.jpg"
                className="d-block w-100"
                alt="..."
                style={{
                  width: "100vh", // Image width matches carousel width
                  height: "100vh", // Image height matches carousel height
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
      <div className="container">
      {
        foodCat.length !==0
       ? foodCat.map((data)=>{
       return (<div className="row mb-3">

            <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
             <hr/>
            { foodItem.length !==0? foodItem.filter(item=> item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase()) ))
             .map(filterItems=>{
              return (
                 <div key ={filterItems._id} className="col-12 col-md-6  col-lg-3">
                  <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} />
                 </div>
                 
              )

             }):""
            

            }       
            </div>)
          
        }) : ""
      }
     
       
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
