import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>Copyrigh &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
}

export default Footer;
