import { useHistory } from "react-router";
import "./nav.css";
const Nav = () => {
  const history = useHistory();

  return (
    <div className='d-flex flex-rows align-items-center p-3 justify-content-around' >
      <p onClick={() => history.push('/home')}>Home</p>
      <p onClick={() => history.push('/local')}>Local</p>
      <p onClick={() => history.push('/visitor')}>Visitor</p>
      <p
        onClick={() => history.push("/login")}
        className="login align-self-end"
      >
        <i className="fa fa-user-plus"></i>
      </p>
    </div>
  );
};

export default Nav;
