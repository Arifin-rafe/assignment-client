
const Subjects = () => {
    return (
        <div className='mt-5 my-5 items-center justify-center'>
            <div className='text-3xl font-serif font-bold text-center my-5 text-black'>
                <h2 className='font-serif text-3xl'>Subjects we cover</h2>
            </div>
            <div className='flex gap-5'>
                <div className="group relative">
                    <img className='w-64 h-52 rounded-lg hover:opacity-50 ' src="../../../../public/images/laptop.jpg" alt="" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-xl font-serif font-semibold text-center my-24">MATH</p>
                    </div>
                </div>
                <div className="group relative">
                    <img className='w-64 h-52 rounded-lg hover:opacity-50' src="../../../../public/images/notepad.jpg" alt="" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-xl font-serif font-semibold text-center my-24">GEOLOGY</p>
                    </div>
                </div>
                <div className="group relative">
                    <img className='w-64 h-52 rounded-lg hover:opacity-50' src="../../../../public/images/school-work.jpg" alt="" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-xl font-serif font-semibold text-center my-24">HISTORY</p>
                    </div>
                </div>
                <div className="group relative">
                    <img className='w-64 h-52 rounded-lg hover:opacity-50' src="../../../../public/images/student.jpg" alt="" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-xl font-serif font-semibold text-center my-24">IT</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subjects;