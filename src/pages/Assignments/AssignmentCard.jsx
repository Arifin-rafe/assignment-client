import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Rating,
} from "@material-tailwind/react";
// import { useState } from "react";
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
    const { title, img, _id, date, marks } = assignment

    return (
        <Card className="mt-6 ">
            <CardHeader color="blue-gray" className="relative">
                <img className=""
                    src={img}
                />
            </CardHeader>
            <CardBody className="h-36">
                <Typography variant="h5" color="blue-gray" className="mb-2 font-serif font-semibold ">
                    {title}
                </Typography>
                <div className="flex gap-4">
                    <Typography className="font-serif text-sm">
                    <span className="font-semibold">Last Date:</span> {date}
                    </Typography>
                    <Typography className="font-serif text-sm">
                        <span className="font-semibold">Marks:</span> {marks}
                    </Typography>
                </div>
                <Rating className="mt-3" value={4} />
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={`/assignmentDetails/${_id}`}><Button>More details</Button></Link>
            </CardFooter>
        </Card>
    );
}

export default AssignmentCard