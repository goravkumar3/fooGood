import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
    const {title,url}=props
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <select id="inputState" className="form-select w-50">
            {Array.from(Array(6),(e,i)=>{
              return<option key={i} value={i+1}>{i+1}</option>
            })}
          </select>
          
          <select id="inputState" className="form-select w-50">
            <option value="Half">Half</option>
            <option value="Full">Full</option>
          </select>
          <Link className="btn btn-primary w-100">Add To Cart</Link>
        </div>
      </div>
    </div>
  );
}
export default Card;
