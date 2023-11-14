import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
    const { name, title,img,description ,_id} = assignment


    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img className="h-96"
                    src={img}
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={`/assignmentDetails/${_id}`}><Button>More details</Button></Link>
            </CardFooter>
        </Card>
    );
}

export default AssignmentCard