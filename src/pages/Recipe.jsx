import {useParams, useNavigate} from "react-router-dom";
import {getMealById} from "../api";
import {useEffect, useState} from "react";
import Preloader from "../components/Preloader";

function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({})
    const goBack = useNavigate();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]))
    }, [id])

    return (
        <>
            {!recipe.idMeal ?( <Preloader/>) : (
                <div className='recipe'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Country: {recipe.strArea}</h6> : null}
                    <p style={{marginBottom: 0}}>Instruction: </p>
                    <p style={{marginTop: 0}}>{recipe.strInstructions}</p>

                    <table className='centered'>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                    if(key.includes('Ingredient') && recipe[key]){
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{
                                                    recipe[`strMeasure${key.substring(13)}`]
                                                }</td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })
                            }
                        </tbody>
                    </table>


                    {recipe.strYoutube ? (
                    <div className='row'>
                        <h5 style={{margin: '2rem 1.5rem'}}>Recipe Video</h5>
                        <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.substring(24)}`} allowFullScreen/>
                    </div>
                    ): null}
                </div>
            )}
            <button className='btn' onClick={() => goBack(-1)}>Go Back</button>
        </>
    )
}

export default Recipe;