import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    
} from "@material-tailwind/react";
import GiveMarks from "../../Modals/GiveMarks";

const SubmittedCard = ({submit}) => {
    const{title,notes,participantEmail,authorEmail,name,link}=submit
    return (
        <Card className="mt-6 w-96">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Title:- {title}
                </Typography>
                <Typography>
                    Notes:- {notes}
                </Typography>
                <Typography>
                   Submitted By:{participantEmail}
                </Typography>
                <Typography>
                   Examinee By:{name}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <GiveMarks title={title} link={link} notes={notes}></GiveMarks>
            </CardFooter>
        </Card>
    );
};

export default SubmittedCard;