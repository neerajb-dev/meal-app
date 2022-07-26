import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Sidebar = ({ type }) => {

    const MEAL_API_CATEGORY = "https://www.themealdb.com/api/json/v1/1/categories.php";

    const HOME = [
        {
            id: 1,
            link: "/",
            linkName: "Home"
        },
        {
            id: 2,
            link: "menu",
            linkName: "Menu"
        },
        {
            id: 3,
            link: "about",
            linkName: "About"
        },
        {
            id: 4,
            link: "Contact",
            linkName: "Contact"
        }
    ]

    const [mealCategory, setMealCategory] = useState([]);

    const {mealId} = useParams();

    useEffect(() => {
        getMealCategory();
    }, [])

    const getMealCategory = () => {
        axios.get(MEAL_API_CATEGORY).then(res => {
            if (res.data) {
                // console.log(res.data);
                setMealCategory(res.data.categories);
            }
        }).catch(err => {
            console.log(err.message);
        })
    }

    // console.log(mealCategory);

    return (
        <div className="sidebar col-sm-3">
            {/* <ul className="sidebar-links">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/menu" className="nav-link">Menu</Link>
                </li>
            </ul> */}
            {
                (type === "/") ? <ul className="sidebar-links">
                    {
                        HOME.map((d,n) => {
                            return (
                                <li className="sideNav-item" key={n}>
                                    <Link to={d.link} className="sideNav-link">{d.linkName}</Link>
                                </li>
                            )
                        })
                    }
                </ul> : null 
            }
            {
                (type === "/menu" || type === "/menu/" + mealId) ? <ul className="sidebar-links">
                    <h4 className="text-center">Food By Category</h4>
                    {
                        mealCategory.map((d, n) => {
                            return (
                                <li className="sideNav-item" key={n}>
                                    <Link className="sideNav-link" to={`menu/${d.strCategory}`}>{d.strCategory}</Link>
                                </li>
                            )
                        })
                    }
                </ul> : null 
            }
        </div>
    )
};

export default Sidebar;