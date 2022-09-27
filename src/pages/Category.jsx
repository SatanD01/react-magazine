import {useParams, useNavigate} from "react-router-dom";
import {getFilteredCategory} from "../api";
import {useState, useEffect} from "react";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

function Category() {
    const goBack = useNavigate();
    const [meals, setMeals] = useState([]);
    const {name} = useParams();
    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name])
    return (
        <div>
            <button className='btn' onClick={() => goBack(-1)}>
                Go Back
            </button>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </div>
    )
}

export default Category;