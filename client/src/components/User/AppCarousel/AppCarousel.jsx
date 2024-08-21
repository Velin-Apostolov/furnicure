import { Carousel } from "antd";
import Card from "../Card/Card";

const AppCarousel = ({ items }) => {
    return (
        <div className="carousel-container">
            <Carousel className="carousel">
                {items.map(item => (
                    <div className="carousel-slide" key={item.key}>
                        <img
                            src={item.imageUrl}
                            alt={item.title || 'Carousal Image'}
                            className="carousel-image"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default AppCarousel;