import {Outlet, useNavigate} from "react-router-dom";

const SettingMenuLayout = () => {

    const navigate = useNavigate();
    return (
        <div className='w-full h-full flex'>
            <ul className="menu bg-base-100 w-56 rounded-box">
                <li><a
                    onClick={() => navigate("/setting/general")}
                >General</a></li>
                <li><a
                    onClick={() => navigate("/setting/aliyun-oss")}
                >Aliyun OSS</a></li>
            </ul>
            <div className='w-0 flex-1 m-2 bg-base-100 rounded-lg'>
                <Outlet/>
            </div>
        </div>
    );
}

export default SettingMenuLayout;