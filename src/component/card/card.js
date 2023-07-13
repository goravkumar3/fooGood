import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
    const {title}=props
  return (
    <>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="row gap-3">
          <select id="inputState" className="form-select w-25 col-6 mx-5">
            {Array.from(Array(6),(e,i)=>{
              return<option key={i} value={i+1}>{i+1}</option>
            })}
          </select>
          
          <select id="inputState" className="form-select w-25 col-6">
            <option value="Half">Half</option>
            <option value="Full">Full</option>
          </select>
          </div>
          <Link className="btn btn-primary w-100 my-3">Add To Cart</Link>
        </div>
     </>
  );
}
export default Card;
