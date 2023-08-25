import React from "react";
import { Link } from "react-router-dom";

interface SubmenuProps {}

const Submenu: React.FC<SubmenuProps> = () => {
  return (
    <section className="submenu">
      <div className="submenu__wrapper">
        <p>Extreme mountain bike driving</p>
        <Link to="/">Read more</Link>
      </div>
      <div className="submenu__wrapper">
        <p>Bicycles for professionals</p>
        <Link to="/">Read more</Link>
      </div>
      <div className="submenu__wrapper">
        <p>Long road bike ride</p>
        <Link to="/">Read more</Link>
      </div>
    </section>
  );
};

export default Submenu;
