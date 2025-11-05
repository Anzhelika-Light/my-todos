/** @jsxImportSource @emotion/react */
import {Layout, Menu} from "antd";
import {Link, useLocation} from "react-router-dom";

import menuItems from "./menuItems.jsx";

import {headerCss, logoCss, menuCss} from "./styles.js";

const {Header} = Layout;

const MainLayoutHeader = () => {
    const location = useLocation();

    return (<Header css={headerCss}>
            <Link to="/" css={logoCss}>My Todos</Link>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[location.pathname]}
                items={menuItems}
                css={menuCss}
            />
        </Header>)
};

export default MainLayoutHeader;
