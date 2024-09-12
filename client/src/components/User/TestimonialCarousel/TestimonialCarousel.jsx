import { Carousel } from "antd";

const testimonials = [
    {
        id: 1,
        text: "FurniCure transformed my living space with their stylish furniture. Highly recommend!",
        author: "Gigi"
    },
    {
        id: 2,
        text: "Exceptional quality and excellent customer service. Will definitely shop here again.",
        author: "Taigura"
    },
    {
        id: 3,
        text: "Beautiful designs and fast delivery. Very happy with my purchase!",
        author: "Jiki"
    },
];


const TestimonialCarousel = () => {
    return (
        <Carousel autoplay className="mx-auto max-w-2xl">
            {testimonials.map(testimonial => (
                <div 
                    key={testimonial.id} 
                    className="bg-primary flex items-center justify-center p-6 bg-warm-bg shadow-md rounded-lg h-[12rem] flex-col"
                >
                  <div className="flex flex-col items-center justify-center h-full text-center">
                        <p className="text-lg text-charcoal-gray mb-4">
                            "{testimonial.text}"
                        </p>
                        <footer className="text-deep-forest-green mt-4">
                            — {testimonial.author}
                        </footer>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default TestimonialCarousel;