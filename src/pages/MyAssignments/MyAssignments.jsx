// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import MyAssignmentCard from "../MyAssignmentCard/MyAssignmentCard";
import Swal from "sweetalert2";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const MyAssignments = () => {

    const { user } = useContext(AuthContext)

    const [myAssignments, setMyAssignments] = useState([])
    const url = `http://localhost:5000/myassignment?email=${user?.email}`
    console.log(user?.email);
    useEffect(() => {
        if (user?.email) {
            fetch(url)
                .then(res => res.json())
                .then(data => setMyAssignments(data))
        }
    }, [url, user?.email])

    const handleDelete = id => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/assignments/${id}`, {
                    method: 'DELETE'
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = myAssignments.filter(ma => ma._id !== id)
                            setMyAssignments(remaining)
                        }
                    })


            }
        });

    }
    const TABLE_HEAD = ["Image", "Marks", "Date", "Title", "Action"];
    return (
        <div >
            <Card className="h-full w-full mt-4">
            
            <CardBody className="px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {myAssignments.map(my => <MyAssignmentCard key={my._id} my={my} handleDelete={handleDelete}></MyAssignmentCard>)}
                </table>
            </CardBody>

        </Card>
            
        </div>
    );
};

export default MyAssignments;