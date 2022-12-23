import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import userData from "data/user";
import { loginSuccess } from "features/auth/authSlice";
import image from "assets/image";
import { Container, FormWrapper, Logo } from "./Login.styled";
import { useNavigate } from "react-router-dom";
type IFormLogin = {
  userName: string;
  password: string;
};
const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (data: IFormLogin) => {
    const { userName, password } = data;
    const findUser = userData.find(
      (user) => user.email === userName && user.password === password
    );
    if (!findUser) {
      console.log("not found");
      return;
    }
    dispatch(loginSuccess(findUser));
    navigate("/task");
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Container>
      <FormWrapper>
        <Logo src={image.logoText} />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="UserName"
            name="userName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
