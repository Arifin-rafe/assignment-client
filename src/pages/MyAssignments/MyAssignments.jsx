// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import MyAssignmentCard from "../MyAssignmentCard/MyAssignmentCard";
import Swal from "sweetalert2";

const MyAssignments = () => {

    const { user } = useContext(AuthContext)

    const [myAssignments,setMyAssignments] = useState([])
    const url = `http://localhost:5000/assignment?email=${user?.email}`
    console.log(user?.email);
    useEffect(() => {
        if(user?.email){
            fetch(url)
            .then(res => res.json())
            .then(data=>setMyAssignments(data))
        }
    }, [url,user?.email])

    const handleDelete = id => {
        const proceed = Swal.fire({
            icon: "delete",
            title: "Are you sure.",
            text: "Want to delete",
            showConfirmButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Confirm',
            showCancelButton:true
          });
        if (proceed) {
            fetch(`http://localhost:5000/assignments/${id}`, {
                method: 'DELETE'
            }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        
                        const remaining = myAssignments.filter(ma => ma._id !== id)
                        setMyAssignments(remaining)
                    }
                })
        }
    }
    return (
        <div className="grid grid-cols-3 mb-10">
            {myAssignments.map(my=><MyAssignmentCard key={my._id} my={my} handleDelete={handleDelete}></MyAssignmentCard>)}
            

        </div>
    );
};

export default MyAssignments;