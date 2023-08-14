import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
        <li>
                    <Link to="/">Home</Link>
                </li>
      <li><Link to="/students">  students  </Link>
      <span></span>
      </li>
      <li>
      <Link to="/wizarding-schools">  schools  </Link>
      </li>
    </div>
  )
}