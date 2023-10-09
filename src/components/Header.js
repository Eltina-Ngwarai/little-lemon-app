import React from "react";
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

            <button aria-label="On Click">Reserve Table</button>
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
