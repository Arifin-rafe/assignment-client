import { useEffect, useState } from 'react';
import AssignmentCard from './AssignmentCard';

const Assignments = () => {
    const [assignments,setAssignments]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/assignments')
        .then(res=>res.json())
        .then(data=>setAssignments(data))
    },[])
    return (
        <div className='grid grid-cols-3 mt-10 gap-5'>
            {assignments.map(assignment=><AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)}
        </div>
    );
};

export default Assignments;