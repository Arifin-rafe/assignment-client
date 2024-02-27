// import React from 'react';
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
    Select,
    Option,
} from "@material-tailwind/react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateAssignment = () => {
    const [difficultyLvl, setDifficultyLvl] = useState('')
    const update = useLoaderData()
    const { name, email, title, description, marks, img, date, _id, difficulty } = update
    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const marks = form.marks.value;
        const img = form.img.value;
        const date = form.date.value;
        const description = form.description.value;
        const difficulty = difficultyLvl;
        const updateInfo = { name, email, title, marks, img, date, description, difficulty }

        fetch(`http://localhost:5000/assignments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Do you want to Update more Product',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }
    const handleSelect = e => {
        setDifficultyLvl(e)
    }
    return (
        <div className="flex justify-center mx-auto mt-10 shadow-2xl rounded-lg">
            <Card color="transparent" shadow={false} >
                <Typography variant="h4" color="blue-gray" className="mx-auto">
                    Update Assignment
                </Typography>
                <Typography color="gray" className="text-center mt-1 mx-auto font-normal">
                    Update your creativity! Enter your details for assignment.
                </Typography>
                <form onSubmit={handleUpdate} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-auto">
                    <div className="mb-1 flex flex-col gap-6">
                        <div className="mx-auto md:flex gap-9 items-center">
                            <Typography variant="h6" color="blue-gray" className="md:-mb-3 -mt-2">
                                Name
                            </Typography>
                            <Input
                                size="lg"
                                name="name"
                                defaultValue={name}
                                placeholder="Your Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required />
                            <Typography variant="h6" color="blue-gray" className="">
                                Email
                            </Typography>
                            <Input
                                size="lg"
                                name="email"
                                defaultValue={email}
                                type="email"
                                
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>
                        <div className="mx-auto md:flex gap-9 items-center">
                            <Typography variant="h6" color="blue-gray" className="md:mr-3">
                                Title
                            </Typography>
                            <Input
                                size="lg"
                                defaultValue={title}
                                type="text"
                                name="title"
                                placeholder="Assignment title"
                                className="mb-3 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="">
                                Marks
                            </Typography>
                            <Input
                                size="lg"
                                name="marks"
                                defaultValue={marks}
                                placeholder="Assignment total marks"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div className="mx-auto md:flex gap-9">
                            <Typography variant="h6" color="blue-gray" className="md:mt-2">
                                Image
                            </Typography>
                            <Input
                                size="lg"
                                name="img"
                                defaultValue={img}
                                placeholder="Photo URL"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="md:-mb-3 mt-2">
                                Date
                            </Typography>
                            <Input
                                size="lg"
                                name="date"
                                defaultValue={date}
                                type="date"
                                placeholder="date"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div className="mx-auto md:flex gap-9">
                            <div className="flex w-auto flex-col gap-6">

                                <Textarea variant="outlined" name="description" defaultValue={description} label="Description" />
                            </div>
                            <div className="flex w-72 flex-col gap-6">

                                <Select color="teal" defaultValue={difficulty} value={difficultyLvl} onChange={handleSelect} name="difficulty" label="Select difficulty">
                                    <Option value="easy">Easy</Option>
                                    <Option value="medium">Medium</Option>
                                    <Option value="hard">Hard</Option>

                                </Select>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" className="mt-6 items-center" fullWidth>
                        update
                    </Button>

                </form>
            </Card>
        </div>
    );
};

export default UpdateAssignment;