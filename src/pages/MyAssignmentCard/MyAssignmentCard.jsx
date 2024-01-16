import {
    
    Typography,
} from "@material-tailwind/react";
// import { Link } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

import {
    Avatar,
    IconButton,
    Tooltip, 
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MyAssignmentCard = ({ my, handleDelete }) => {
    const { title, marks, date, description, _id, email, img } = my

    return (
        <tbody>
            <tr>
                <td className={title}>
                    <div className="flex items-center gap-3">
                        <Avatar
                            src={img}
                            alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                        >
                            {name}
                        </Typography>
                    </div>
                </td>
                <td className={marks}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {marks}
                    </Typography>
                </td>
                <td className={date}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {date}
                    </Typography>
                </td>
                <td className={date}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {title}
                    </Typography>
                </td>
                
                <td >
                    <Tooltip content="Update">
                        <IconButton variant="text">

                            <Link to={`/update/${_id}`}><PencilIcon className="h-4 w-4" /></Link>
                        </IconButton>

                    </Tooltip>
                    <Tooltip content="Delete">
                        <IconButton variant="text">
                            <TrashIcon onClick={() => handleDelete(_id)} className="h-4 w-4"></TrashIcon>
                        </IconButton>

                    </Tooltip>
                </td>
            </tr>
        </tbody>

    );
};

export default MyAssignmentCard;