import "./style.css";
import Navbar from "../../Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-picture">
        <img
          src={process.env.PUBLIC_URL + "/img/passportjpg.jpg"}
          alt="profile"
          className="header-img"
        />
      </div>
      <Navbar />
    </div>
  );
};
export default Header;
