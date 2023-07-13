import React,{useEffect,useState} from "react";
import "../css/home.css";
import Card from '../card/card'
import '../css/home.css'
function Home() {
  const [productitem,setproductItem]=useState([])
  const [productCatg,setproductCatg]=useState([])
  const load=async ()=>{
const response = await fetch('http://127.0.0.1:5000/api/productData/fetchProduct', {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
          })
          const responseCtg = await fetch('http://127.0.0.1:5000/api/productCatg//FoodCatg', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
        })
      const Json = await response.json();
      console.log(Json)
      setproductItem(Json)
      
      const JsonCatg = await responseCtg.json();
      console.log(JsonCatg)
      setproductCatg(JsonCatg)
  }         
  useEffect(()=>{
    load()
  },[])
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdHVyYW50JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              style={{height:"500px"}}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1627286400579-027de47e9e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdHVyYW50JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              style={{height:"500px"}}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHVyYW50JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              style={{height:"500px"}}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
                         {
          productCatg.map((itemCatg)=>{
                  return(
                    <div key={itemCatg._id}>
                    <h1>{itemCatg.foodCatg}</h1>
                    <hr />
                    <div className="container px-4">
                    <div className="row  gap-3">
                    {
          productitem.filter((food)=>food.foodCatg.toLowerCase()===itemCatg.foodCatg.toLowerCase()).map((item)=>{
                  return(
                    
                      <div className="col-12 col-md-6 col-lg-4 col-xl-4 card"  key={item._id}>
                    <Card  title={item.title} />
                    </div>
                  )
                })}
                </div>
                </div>
                    </div>
                  )
                })}
              </div>
    </>
  );
}
export default Home;
