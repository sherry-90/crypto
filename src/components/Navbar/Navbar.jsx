import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import "./Navbar.css";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";

export default function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "gbp": {
        setCurrency({ name: "gbp", symbol: "£" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </select>
        <button>
          Sign up
          <img src={arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  );
}
