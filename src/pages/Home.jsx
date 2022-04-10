import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import homeImage from "../assets/home.jpg";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "8e15aab2";
const APP_KEY = "52866a9b7a13b82cc9e43c84b04de877";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);
  const [allmeal, setAllmeal] = useState([]);
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const BaseURL = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const axiosFunc = async () => {
    axios.get(BaseURL).then(({ data }) => {
      setAllmeal(data.hits);
    });
  };

  const handleDetails = (item) => {
    navigate("/details", { state: { item } });
  };

  const selectChange = (e) => {
    setMeal(e.target.value.toLowerCase());
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosFunc();
  };

  const inputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">

      <h1>Food App</h1>
      <form className="searchBar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          autoFocus
          onChange={inputChange}
          required
        />
        <button className="btn-grad">Search</button>
        <select onChange={selectChange}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
          <option value="dinner">Dinner</option>
        </select>
      </form>
      {
        allmeal.length>0 ? "" : (<img src={homeImage} alt="" className="homeImage" />) 
      }
        

      <section className="mealSection">
        {allmeal != [] &&
          allmeal?.map((item, index) => {
            return (
              <div key={index} className="mealBox">
                <h3>{item.recipe.label}</h3>
                <img src={item.recipe.image} alt="" />
                <br />
                <button
                  className="detailsButton"
                  onClick={() => handleDetails({ item })}
                >
                  View More
                </button>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default Home;
