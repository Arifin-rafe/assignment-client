
import Achievements from './Achievements/Achievements';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Features from './Features/Features';
import Subjects from './Subjects/Subjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Subjects></Subjects>
            <div className='flex gap-10 mt-10 justify-center'>
                <img className='w-96' src="../../../public/images/assi-mail.jpg" alt="" />
                <div className='w-96'>
                    <Faq></Faq>
                </div>
            </div>
            <h3 className='text-3xl font-bold text-center'>Our Features</h3>
            <Features></Features>
            <Achievements></Achievements>
            
        </div>
    );
};

export default Home;