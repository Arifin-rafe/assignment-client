// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import SubmittedCard from "../SubmittedCard/SubmittedCard";

const Submitted = () => {
    const { user } = useContext(AuthContext)
    const[submitted,setSubmitted]= useState([])
    const url =`http://localhost:5000/submit?email=${user?.email}`
    console.log(user.email);

    useEffect(()=>{
        if(user?.email){
            fetch(url)
        .then(res=>res.json())
        .then(data=>setSubmitted(data))
        }

    },[url,user?.email])
    return (
        
        <div className="grid grid-cols-3">
            {submitted.map(submit=><SubmittedCard key={submit._id} submit={submit}></SubmittedCard>)}
        </div>
    );
};

export default Submitted;