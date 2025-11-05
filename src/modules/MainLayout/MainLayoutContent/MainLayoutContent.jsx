/** @jsxImportSource @emotion/react */
import {Outlet} from "react-router-dom";
import {Layout} from "antd";

import {contentCss} from "./styles.js";

const {Content} = Layout;

const MainLayoutContent = () => {
    return (
        <Content css={contentCss}>
            <Outlet/>
        </Content>
    )
}

export default MainLayoutContent;
