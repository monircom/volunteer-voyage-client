
import Carousel from '../components/Carousel';
import VolunteerNeedsNow from './VolunteerNeedsNow';
import GetInTouch from './GetInTouch';
import About from './About';

const Home = () => {
    return (
        <div>            
            <Carousel />
            <VolunteerNeedsNow></VolunteerNeedsNow>
            <GetInTouch></GetInTouch>
            <About></About>
        </div>
    );
};

export default Home;