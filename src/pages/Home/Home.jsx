
import Achievements from './Achievements/Achievements';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Features from './Features/Features';
import Partners from './Partners/Partners';
import Subjects from './Subjects/Subjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Subjects></Subjects>
            <Achievements></Achievements>
            <Partners></Partners>
            <Faq></Faq>
            <h3 className='text-3xl font-bold text-center'>Our Features</h3>
            <Features></Features>

        </div>
    );
};

export default Home;