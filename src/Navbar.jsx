import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `text-lg text-white hover:text-red-200 transition ${
    isActive ? "underline decoration-red-400 decoration-2 font-bold" : ""
  }`;

function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center gap-3 bg-navy-dark px-8 py-5">
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/shop" className={linkClass}>
        Shop
      </NavLink>
      <NavLink to="/contact" className={linkClass}>
        Contact Us
      </NavLink>
    </nav>
  );
}

export default Navbar;
