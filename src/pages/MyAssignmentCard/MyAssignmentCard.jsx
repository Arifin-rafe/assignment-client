import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MyAssignmentCard = ({ my,handleDelete }) => {
    const { title, marks, date,description,_id,email } = my
    
    return (
        <Card className="mt-6 w-96">
            <img/>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Title:- {title}
                </Typography>
                
                <Typography>Mail:- {email}</Typography>
                <div className="flex gap-5">
                    <Typography>Total Marks: {marks}</Typography>
                    <Typography>Submission Date: {date}</Typography>
                    
                </div>
            </CardBody>
            <CardFooter className="pt-0 flex gap-5 inset-x-0 bottom-0">
                <Link to={`/update/${_id}`}><Button>Update</Button></Link>
                <Button onClick={()=>handleDelete(_id)}>Delete</Button>
            </CardFooter>
        </Card>
    );
};

export default MyAssignmentCard;