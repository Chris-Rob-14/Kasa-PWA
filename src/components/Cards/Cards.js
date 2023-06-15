import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import Data from "../../data/data.json";

function Cards() {
  return (
    <div className="card-container">
      <ul className="card-list">
        <li className="card-item">
          {Data.map((item) => {
            return (
              <Link
                to={`/house/${item.id}`}
                className="house-link"
                key={item.id}
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="house-image"
                />
                <div className="card-info">
                  <h4 className="item-title">{item.title}</h4>
                </div>
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default Cards;