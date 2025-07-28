import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/images/gallery/img_1.jpg",
            authorImg: "/images/chefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/images/gallery/img_4.jpg",
            authorImg: "/images/chefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/images/gallery/img_5.jpg",
            authorImg: "/images/chefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/images/gallery/img_6.jpg",
            authorImg: "/images/chefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/images/gallery/img_10.jpg",
            authorImg: "/images/chefs/img_6.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/images/gallery/img_1.jpg",
            authorImg: "/images/chefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/images/gallery/img_4.jpg",
            authorImg: "/images/chefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/images/gallery/img_5.jpg",
            authorImg: "/images/chefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/images/gallery/img_6.jpg",
            authorImg: "/images/chefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/images/gallery/img_10.jpg",
            authorImg: "/images/chefs/img_6.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/images/gallery/img_5.jpg",
            authorImg: "/images/chefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/images/gallery/img_6.jpg",
            authorImg: "/images/chefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} index={index} />
                ))}
            </div>
        </div>
    )
}


