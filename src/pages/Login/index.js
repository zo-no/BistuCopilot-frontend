import {  useNavigate } from "react-router-dom"; //方法一 声明式导航
import { Card, Form, Input, Button, message ,CaretLeftOutlined} from 'antd'
import './index.scss'
import logo from '@/assets/logo.png'

const Login = () => {
  const onFinish = (values) =>{
    console.log(values);
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="mobile"
            // 多条校验逻辑 先校验第一条 第一条通过之后再校验第二条
            rules={[
              {
                required: true,
                message: "请输入学号",
              },
              // 正则需要学习 {
              //   pattern: /^1[3-9]\d{10}$/,
              //   message: "请输入正确的学号格式",
              // },
            ]}
          >
            <Input size="large" placeholder="请输入学号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input size="large" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
