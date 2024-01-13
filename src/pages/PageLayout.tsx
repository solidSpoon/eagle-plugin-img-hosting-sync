import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

const PageLayout = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [mode, _setMode] = useState<"light" | "dark">("light");
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname)
    return (
        <div
            data-theme={mode}
            className="w-full h-screen flex flex-col"
        >
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a
                        onClick={() => navigate("/")}
                        className="btn btn-ghost text-xl">p2l</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 drop-shadow-lg">
                        <li><a
                            onClick={() => navigate("/setting/general")}
                        >config</a></li>
                        {/*<li>*/}
                        {/*    <details>*/}
                        {/*        <summary>*/}
                        {/*            Parent*/}
                        {/*        </summary>*/}
                        {/*        <ul className="p-2 bg-base-100 rounded-t-none">*/}
                        {/*            <li><a>Link 1</a></li>*/}
                        {/*            <li><a>Link 2</a></li>*/}
                        {/*        </ul>*/}
                        {/*    </details>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
            <div className={"flex-1 h-0 bg-base-100"}>
                <Outlet/>
            </div>
        </div>
    )
}

export default PageLayout