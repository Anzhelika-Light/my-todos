/** @jsxImportSource @emotion/react */
import {Layout} from "antd";

import {footerCss} from "./styles.js";

const {Footer} = Layout;

const mainLayoutFooter = () => {
    return (
        <Footer css={footerCss}>
            My Todos ©{new Date().getFullYear()} Created by @Anzhelika_Light
        </Footer>
    )
}

export default mainLayoutFooter;
