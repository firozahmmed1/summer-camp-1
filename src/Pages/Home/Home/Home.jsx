
import Slider from "../../../Components/Slider/Slider";
import PopularInstractureSection from "../PopularInstractureSection/PopularInstractureSection";
import PopularClassSection from "../PopularSection/PopularClassSection";



const Home = () => {
    return (
        <div>
             <Slider></Slider>
             <PopularClassSection></PopularClassSection>
             <PopularInstractureSection></PopularInstractureSection>
        </div>
    );
};

export default Home;