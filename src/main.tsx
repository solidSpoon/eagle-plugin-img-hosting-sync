import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import PageLayout from "./pages/PageLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import GeneralSetting from "./pages/settings/GeneralSetting.tsx";
import SettingMenuLayout from "./pages/SettingMenuLayout.tsx";
import AliyunSetting from "./pages/settings/AliyunSetting.tsx";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='setting' element={<SettingMenuLayout/>}>
                <Route
                    path="general"
                    element={<GeneralSetting/>}
                />
                <Route
                    path="aliyun-oss"
                    element={<AliyunSetting/>}
                />
            </Route>
        </Route>
    )
);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
