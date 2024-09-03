import { Link } from "react-router-dom";
import { Button } from "antd";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <div className="">
        <Link to="/">
          <Button type="primary">Go Home</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
