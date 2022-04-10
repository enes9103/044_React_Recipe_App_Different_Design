import React from "react";
import { useLocation } from "react-router";

function Details() {
  const location = useLocation();
  const data = location.state.item.item.recipe;
  console.log(data);
  return (
    <div className="detailsContainer">
      <h1><span className="span1">{data.mealType} Food : </span> <span className="span2">{data.label}</span></h1>
      <nav>
        <div>
          <img src={data.image} alt="" />
        </div>
        <div>
          <p>Calsium : {data.totalNutrients.CA.quantity.toFixed(2)}</p>
          <p>Carbs : {data.totalNutrients.CHOCDF.quantity}</p>
          <p>
            Cholesterol : {data.totalNutrients.CHOLE.quantity.toFixed(0)} mg
          </p>
          <p>
            Energy : {data.totalNutrients.ENERC_KCAL.quantity.toFixed(0)} kcal
          </p>
        </div>
      </nav>
    </div>
  );
}
export default Details;
