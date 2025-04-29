import CustomImage from "./CustomImage";
export default function HeroSection(){
    return(
    <>
    <div className="section hero">
        <div className="col">
            <h1 className="title">
                What Are We About
            </h1>
            <p className="info">
                FoodiesHub is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free. So start exploring now.
            </p>
            <button className="btn">
                EXPLORE NOW
            </button>
        </div>
        <div className="col gallery">
            <CustomImage/>
            <CustomImage/>
            <CustomImage/>
            <CustomImage/>
            <CustomImage/>
            <CustomImage/>
            <CustomImage/>
            <CustomImage/>
            <CustomImage/>
            <CustomImage/>
        </div>
    </div>
    </>
    )
}