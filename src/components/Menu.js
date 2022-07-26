import { Outlet } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu col-sm-9">
            Menu
            <Outlet />
        </div>
    )
};

export default Menu;