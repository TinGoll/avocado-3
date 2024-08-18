import { login } from "@/entities/authentication";
import styled from "@emotion/styled";
import { Button, Card, Form, Input } from "antd";
import bgImage from "/images/avocado_bg1.jpg";

type FieldType = {
  username?: string;
  password?: string;
};

const StyledCard = styled(Card)`
  max-width: 600px;
  width: 600px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const LoginForm = () => {
  const onFinish = (values: FieldType) => {
    if (values.username) {
      login(values.username);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledCard cover={<img alt="example" src={bgImage} />}>
      <Form
        css={{ width: "100%" }}
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelCol={{ span: 8 }}
      >
        <Form.Item<FieldType>
          label="Имя пользователя"
          name="username"
          rules={[{ required: true, message: "Не указано имя пользователя" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Не указан пароль" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Actions>
            <Button type="primary" htmlType="submit">
              Вход
            </Button>
            <Button>Регистрация</Button>
          </Actions>
        </Form.Item>
      </Form>
    </StyledCard>
  );
};
