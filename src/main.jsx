import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import { App as AntdApp, ConfigProvider } from "antd";

import store from './redux/store';

import App from './App.jsx'

import "antd/dist/reset.css";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ConfigProvider>
                    <AntdApp>
                        <App />
                    </AntdApp>
                </ConfigProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
