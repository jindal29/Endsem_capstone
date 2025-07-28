import CustomImage from "./CustomImage"

export default function RecipeCard({recipe, index}){
    return (
        <div className="recipe-card" style={{animation: `popOut 0.6s ${index ? index * 0.07 : 0}s both`}}>
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}