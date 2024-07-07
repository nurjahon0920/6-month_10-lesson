import { Link, NavLink } from "react-router-dom";
import "../App.scss";

const Header = () => {
  return (
    <header className="mx-auto  fixed bg-white top-0 left-0 right-0 z-[1000] opacity-[0.97]">
      <div
        className="container max-w-[1440px] mx-auto my-auto flex items-center justify-between"
        style={{ padding: "30px 100px 30px 54px" }}>
        <Link>
          <img src="/LOGO.svg" alt="" />
        </Link>
        <div className="flex " style={{ gap: "75px", marginLeft: "108px" }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="flex" style={{ gap: "45px" }}>
          <Link to="">
            <img src="./src/assets/header/account_svg.svg" alt="" />
          </Link>
          <Link to="">
            <img src="./src/assets/header/heart_svg.svg" alt="" />
          </Link>
          <Link to="">
            <img src="./src/assets/header/search_svg.svg" alt="" />
          </Link>
          <Link to="">
            <img src="./src/assets/header/shopping_svg.svg" alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
