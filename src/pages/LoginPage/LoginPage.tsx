import { FC } from "react";
import { Button, Card, Form, Input } from "antd";
import styles from "./LoginPage.module.css";
import bgImage from "/images/avocado_bg1.jpg";
import { login } from "@/features/authentication";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
};

export const LoginPage: FC = () => {
  const onFinish = (values: FieldType) => {
    if (values.username) {
      login(values.username);
    }
  };
  return (
    <div>
      <Card className={styles.card} cover={<img alt="example" src={bgImage} />}>
        <Form
          className={styles.form}
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
            <div className={styles.actions}>
              <Button type="primary" htmlType="submit">
                Вход
              </Button>
              <Button>Регистрация</Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
