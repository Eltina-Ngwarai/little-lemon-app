import React from "react";
import { Link } from "react-router-dom";
import food from "../components/images/food.jpg";

function Header() {
  return (
    <div>
      <header className="header">
        <section>
          <div className="app-banner">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterraneran restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/bookingpage">
              <button aria-label="On Click">Reserve Table</button>
            </Link>
          </div>
          <div className="banner-img">
            <img src={food} alt="food" />
          </div>
        </section>
      </header>
    </div>
  );
}
export default Header;
