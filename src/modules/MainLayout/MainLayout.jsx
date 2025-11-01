/** @jsxImportSource @emotion/react */
import {Layout} from "antd";

import MainLayoutHeader from "./MainLayoutHeader/MainLayoutHeader.jsx";
import MainLayoutContent from "./MainLayoutContent/MainLayoutContent.jsx";
import MainLayoutFooter from "./MainLayoutFooter/MainLayoutFooter.jsx";

import {layoutCss} from "./styles.js";

const MainLayout = () => {
    return (
        <Layout css={layoutCss}>
            <MainLayoutHeader/>
            <MainLayoutContent/>
            <MainLayoutFooter/>
        </Layout>
    );
}

export default MainLayout;
