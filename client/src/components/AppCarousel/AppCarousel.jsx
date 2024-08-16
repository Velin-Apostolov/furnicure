import { Carousel } from "antd";
import Card from "../Card/Card";

const AppCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel className="carousel">
                <div className="carousel-slide">
                    <Card title='Slide 1' content='lmao' imageUrl={'https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo='}/>
                </div>
                <div className="carousel-slide">
                    <img src="path-to-image2.jpg" alt="Slide 2" className="w-full h-auto" />
                </div>
                <div className="carousel-slide">
                    <img src="path-to-image3.jpg" alt="Slide 3" className="w-full h-auto" />
                </div>
                <div className="carousel-slide">
                    <img src="path-to-image4.jpg" alt="Slide 4" className="w-full h-auto" />
                </div>
            </Carousel>
        </div>
    )
}

export default AppCarousel;