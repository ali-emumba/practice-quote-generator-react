import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import { RiChatQuoteLine } from "react-icons/ri";


function Navbar() {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      console.log(searchText);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left_nav}>
        <Link to={"/"} className={styles.logo}>
        <RiChatQuoteLine />

        </Link>{" "}
        <Link to={"/"} className={styles.company_name}>
          <span className={styles.company_name}>Inspire</span>
        </Link>
      </div>
      <div className={styles.right_nav}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search for quote..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={styles.searchbar}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
