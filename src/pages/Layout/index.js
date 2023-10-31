import { Link, Outlet } from "react-router-dom";
import { Button } from "antd";

//Outlet用于显示子组件
const Layout = () => {
  return (
    <div>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
      {/* <Link to="/">面板</Link>
      <Link to="/about">关于</Link> */}
      <Link to="/login">登录</Link>
      {/* 配置二级路由的出口 */}
      <Outlet />
    </div>
  );
};

export default Layout;
