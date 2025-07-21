import { useNavigate } from "react-router-dom";

export const Navigate = () => {
  const user = "user";
  const navigate = useNavigate();

  const onNavigation = () => {
    if (user === "admin") {
      navigate("/slider")
    } else {
      navigate("/condition")
    }
  }
  return <button onClick={onNavigation}>Click me!</button>;
};
