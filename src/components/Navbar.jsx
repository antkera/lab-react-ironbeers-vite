import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <NavLink to={"/"}>Home</NavLink>
      </h1>
    </nav>
  );
}
