import {css} from "@emotion/react";

export const headerCss = (theme) => css`
    display: flex;
    align-items: center;
    background: ${theme.colorBgContainer};
    border-bottom: 1px solid ${theme.colorBorder};
`;

export const logoCss = css`
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin-right: 30px;
`;

export const menuCss = css`
    flex: 1;
    min-width: 0;
`;
