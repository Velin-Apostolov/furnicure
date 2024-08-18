import { Carousel } from "antd";
import Card from "../Card/Card";

const AppCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel className="carousel">
                <div className="carousel-slide">
                    <Card title='Slide 1' content='lmao'/> 
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