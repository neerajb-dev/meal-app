import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const Category = () => {
    const { mealId } = useParams();
    // console.log(mealId);

    const CATEGORY_FILTER = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

    const [mealCategory, setMealCategory] = useState([])

    useEffect(() => {
        getMealCategory();
    }, [mealId])

    const getMealCategory = () => {
        axios.get(CATEGORY_FILTER + mealId).then(res => {
            if (res.data) {
                console.log(res.data);
                setMealCategory(res.data.meals);
            }
        }).catch(err => {
            console.log(err.message);
        })
    }

    // console.log(mealCategory);

    return (
        <div className="category col-sm-9 p-2">
            <div className="row g-0 overflow">
                {
                    mealCategory.map((data) => {
                        return (
                            <div className="col-sm-4 my-2 p-2">
                                <Card
                                    cardImg={data.strMealThumb}
                                    cardTitle={data.strMeal}
                                    cardId={data.idMeal}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Category;