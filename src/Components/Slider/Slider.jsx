import Container from "../Container/Container";
import slider1 from "../../assets/Slider/slider-1 (2).jpeg"
import slider2 from "../../assets/Slider/Slider-2 (2).jpeg"
import slider3 from "../../assets/Slider/Slider-3 (2).jpeg"

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full mb-12 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full " />
                    <div className="bg-gradient-to-r  to-[rgb(139,0,139, 0)] from-black  absolute flex items-center w-full h-full ">
                        <Container>
                            <div className="space-y-2">
                                <h1 className="font-bold text-5xl italic text-white">Nurture Your Talent and Develop New Skills <br /> at Our Arts and Craft School</h1>
                            </div>
                        </Container>

                    </div>
                    <div className="absolute flex  transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide1" className="btn bg-purple-600 btn-circle mr-3">❮</a>
                        <a href="#slide2" className="btn  bg-purple-600 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src={slider2} className="w-full " />
                    <div className="bg-gradient-to-r  to-[rgb(139,0,139, 0)] from-black  absolute flex items-center w-full h-full ">
                        <Container>
                            <div className="space-y-2">
                                <h1 className="font-bold text-5xl italic text-white">Embark on a Journey of Artistic Discovery <br /> at Our Inspiring School!</h1>
                            </div>
                        </Container>
                    </div>
                    <div className="absolute flex  transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide2" className="btn bg-purple-600 btn-circle mr-3">❮</a>
                        <a href="#slide3" className="btn  bg-purple-600 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src={slider3} className="w-full " />
                    <div className="bg-gradient-to-r  to-[rgb(139,0,139, 0)] from-black  absolute flex items-center w-full h-full ">
                        <Container>
                            <div className="space-y-2">
                                <h1 className="font-bold text-5xl italic text-white">Let Your Creativity Flourish in the Vibrant Atmosphere of Our Craft School</h1>
                            </div>
                        </Container>
                    </div>
                    <div className="absolute flex  transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide3" className="btn bg-purple-600 btn-circle mr-3">❮</a>
                        <a href="#slide1" className="btn  bg-purple-600 btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;