import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Card() {
  // const cardData;
  useEffect(() => {
    fetch("../../../public/card.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
    let itemNum=[1,2,3,4,5,6,7,8,9];
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <select>
            {itemNum.forEach((i,a)=>{
                return<option key={i}>{a}</option>
            })}
          </select>
          <Link className="btn btn-primary">Add To Cart</Link>
        </div>
      </div>
    </div>
  );
}
export default Card;
