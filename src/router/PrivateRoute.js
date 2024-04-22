import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Mycontext";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { auth } = useContext(UserContext);

  useEffect(() => {
    if (!auth || !auth.token) {
      navigate("/");
    }
  }, [auth, navigate]);

  if (auth && auth.token) {
    return children;
  } else {
    return null;
  }
};

export default PrivateRoute;
