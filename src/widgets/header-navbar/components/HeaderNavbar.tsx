import { logout } from "@/entities/authentication";
import { ModeButton } from "@/entities/theme";
import { LogoutOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
  padding: 0 16px;
  & .right-menu {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const HeaderNavbar: FC = () => {
  return (
    <Container>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="ui-book">Ui Book</Link>
        <Link to="orders/100/edit">edit order</Link>
        <Link to="orders/100/info">info order</Link>
        <Link to="orders/100/print">print order</Link>
      </div>
      <div className="right-menu">
        <Button
          onClick={logout}
          icon={<LogoutOutlined />}
          size="small"
          type="default"
        >
          Выйти
        </Button>
        <ModeButton size="small" />
      </div>
    </Container>
  );
};
