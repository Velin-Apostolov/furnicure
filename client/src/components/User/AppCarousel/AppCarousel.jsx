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
                    <div className="carousel-slide cursor-pointer" key={item.key}>
                        <img
                            src={item.imageUrl}
                            alt={item.title || 'Carousel Image'}
                            className="w-full h-[27.50rem] object-cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default AppCarousel;