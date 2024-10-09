import React from "react";
import { Link } from "react-router-dom";

export default function Carousal() {
  return (
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
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
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
  );
}
