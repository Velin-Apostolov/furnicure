import { Carousel } from "antd";

const AppCarousel = ({ items }) => {
    return (
        <div className="carousel-container bg-warm-bg">
            <Carousel
                className="carousel"
                autoplay
                autoplaySpeed={1750}
            >
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