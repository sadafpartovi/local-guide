import { useHistory } from "react-router";
import "./nav.css";
const Nav = () => {
  const history = useHistory();

  return (
    <div className="d-flex navContainer mb-2">
      <p className="logo p-3" onClick={() => history.push("/home")}>
        Local Guide
      </p>
      <p className="p-3" onClick={() => history.push("/local")}>
        Local
      </p>
      <p className="p-3" onClick={() => history.push("/visitor")}>
        Visitor
      </p>
      <p onClick={() => history.push("/login")} className="login p-3">
        <i className="fa fa-user-plus"></i>
      </p>
    </div>


  );
};

export default Nav;
