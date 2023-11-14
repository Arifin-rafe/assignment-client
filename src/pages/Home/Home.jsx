
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Features from './Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Faq></Faq>
            <h3 className='text-3xl font-bold text-center'>Our Features</h3>
            <Features></Features>
        </div>
    );
};

export default Home;