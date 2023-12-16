import { useEffect, useState } from 'react';
import AssignmentCard from './AssignmentCard';
// import Filter from '../Filter/Filter';
import { Option, Select } from '@material-tailwind/react';

const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    const [difficultyLvl, setDifficultyLvl] = useState("")
    useEffect(() => {
        fetch(`http://localhost:5000/filter?difficulty=${difficultyLvl}`)
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [difficultyLvl])
    const handleFilter = e =>{
        setDifficultyLvl(e)
        console.log(e);
    }
    return (
        <div >
            <div className='w-10 mt-4'>
            <Select onChange={handleFilter} value={difficultyLvl} className='flex justify-start' color="teal" name="difficulty" label="Select difficulty">
                <Option value="">All</Option>
                <Option value="easy">Easy</Option>
                <Option value="medium">Medium</Option>
                <Option value="hard">Hard</Option>
            </Select>
            </div>
            {/* <Filter></Filter> */}
            <div className='grid grid-cols-4 mt-10 gap-5'>
                {assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)}
            </div>
        </div>

    );
};

export default Assignments;