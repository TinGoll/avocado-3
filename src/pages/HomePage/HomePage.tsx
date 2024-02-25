import { logout } from "@/features/authentication";
import { Button } from "antd";
import { FC } from "react";
import { Link, Navigate } from "react-router-dom";

export const HomePage: FC = () => {

  return <Navigate to={'orders/33?test_param=test'} />;

  return (
    <div>
      <Button onClick={logout}>Разлогинится</Button> <br />
      <Link to="login">Login</Link> <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nobis ipsa
      voluptatibus veniam totam atque inventore nostrum! Vero et minus placeat
      laudantium! Doloremque, placeat nostrum? Sunt enim voluptatibus nam
      doloremque.
    </div>
  );
};
