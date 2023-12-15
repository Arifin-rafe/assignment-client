
// import { Button } from '@material-tailwind/react';
import { useLoaderData } from 'react-router-dom';
import TakeTest from '../../Modals/TakeTest';

const AssignmentDetails = () => {
    const details = useLoaderData()
    const {title,img,marks,name,email,description,date}= details;
    return (
        <div className='text-center mb-10'>
            <img src={img} alt="" className='border-solid border-2 border-indigo-600 ' />
            <div className='mt-10'>
            <p>Title: {title}</p>
            <p>Total Marks: {marks}</p>
            <p>Author Name: {name}</p>
            <p>Last Date: {date}</p>
            <p>Details:-{description}</p>
            <TakeTest className='mt-5' email={email} title={title} name={name}></TakeTest>
            </div>
        </div>
    );
};

export default AssignmentDetails;