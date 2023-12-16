
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Features from './Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className='flex gap-10 mt-10 justify-center'>
                <img className='w-96' src="../../../public/images/assi-mail.jpg" alt="" />
                <div className='w-96'>
                    <Faq></Faq>
                </div>
            </div>
            <h3 className='text-3xl font-bold text-center'>Our Features</h3>
            <Features></Features>
        </div>
    );
};

export default Home;