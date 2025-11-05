import { Suspense, lazy } from "react";
import {  Routes, Route } from "react-router-dom";
import {Spin} from "antd";

import MainLayout from "../modules/MainLayout/MainLayout";

const HomePage = lazy(() => import("./HomePage/HomePage"));
const ArchivePage = lazy(() => import("./ArchivePage/ArchivePage"));
const NotFoundPage = lazy(() => import("./NotFoundPage/NotFoundPage"));

const Navigation = () => {
    return (
        <Suspense fallback={<Spin size="large" />}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="archive" element={<ArchivePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Suspense>
    )
};

export default Navigation;
