import { logout } from "@/features/authentication";
import { Button } from "antd";
import { FC } from "react";

export const HomePage: FC = () => {
  return (
    <div>
      <Button onClick={logout}>Разлогинится</Button>
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nobis ipsa
      voluptatibus veniam totam atque inventore nostrum! Vero et minus placeat
      laudantium! Doloremque, placeat nostrum? Sunt enim voluptatibus nam
      doloremque.
    </div>
  );
};
