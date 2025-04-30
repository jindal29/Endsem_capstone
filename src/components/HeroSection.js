import CustomImage from "./CustomImage";
export default function HeroSection(){
    const images=[
        "/images/gallery/img_1.jpg",
        "/images/gallery/img_2.jpg",
        "/images/gallery/img_3.jpg",
        "/images/gallery/img_4.jpg",
        "/images/gallery/img_5.jpg",
        "/images/gallery/img_6.jpg",
        "/images/gallery/img_7.jpg",
        "/images/gallery/img_8.jpg",
        "/images/gallery/img_9.jpg",
    ]
    return(
    <>
    <div className="section hero">
        <div className="col typography">
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
            {images.map((src,index)=>(
                <CustomImage key={index} imgSrc={src} pt={"90%"}/>
            ))}
        </div>
    </div>
    </>
    )
}