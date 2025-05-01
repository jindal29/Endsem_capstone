import ChefCard from "./ChefCard"

export default function ChefsSection(){
    const chefs = [
        {
            name: "Juan Carlos",
            img: "/images/chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/images/chefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/images/chefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/images/chefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/images/chefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/images/chefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="chefs-container">
                {/* <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard /> */}
                { chefs.map(chef => <ChefCard key={chef.name} chef={chef} />) }
            </div>
        </div>
    )
}