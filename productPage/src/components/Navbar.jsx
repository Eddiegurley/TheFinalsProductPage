import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(search);
  };

  const clearSearch = () => {
    setSearch("");
    onSearch("");
  };

  return (
    <nav className="navbar">
      <h1>Product Store</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart 🛒</Link>
      </div>

      <div className="search-container">
        <input 
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleChange}
        />
        <span className="search-icon" onClick={handleSearchClick}>🔍</span>
        {search && <span className="clear-icon" onClick={clearSearch}>✖</span>}
      </div>
    </nav>
  );
}

export default Navbar;



