import { login } from "@/features/authentication";
import { Button } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

export const LoginPage: FC = () => {
  return (
    <div>
      <Button onClick={login}>Залогинится</Button> <br />
      <Link to="/">Home</Link> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      nobis dignissimos neque facilis rem in corporis natus quaerat tenetur
      vero, rerum sequi cupiditate! Exercitationem earum, odit facilis
      necessitatibus sit autem.
    </div>
  );
};
