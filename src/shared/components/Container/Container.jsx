/** @jsxImportSource @emotion/react */
import {Card} from "antd";

import {containerCss} from "./styles.js";

const Container = ({children}) => {
    return <Card css={containerCss}>{children}</Card>;
};

export default Container;
