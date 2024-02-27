import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
    Select,
    Option,
} from "@material-tailwind/react";

import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const CreateAssignment = () => {
    const [difficultyLvl, setDifficultyLvl] = useState('')
    const { user } = useContext(AuthContext)

    const handleCreateAssignSubmit = event => {
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
        const assignmentInfo = { name, email, title, marks, img, date, description, difficulty }
        console.log(assignmentInfo);

        fetch('http://localhost:5000/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Assignment created',
                        text: 'Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    const handleSelect = e => {
        setDifficultyLvl(e)
    }
    return (
        <div className="flex justify-center shadow-2xl mt-10  rounded-lg">
            <Card color="transparent" shadow={false} >
                <Typography className="mx-auto " variant="h4" color="blue-gray">
                    Create Assignment
                </Typography>
                <Typography color="gray" className="text-center mt-1 mx-auto font-normal">
                    Create your creativity! Enter your details for assignment.
                </Typography>
                <form onSubmit={handleCreateAssignSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-auto">
                    <div className="mb-1 flex flex-col gap-6 ">
                        <div className=" mx-auto md:flex gap-9 items-center">
                            <Typography variant="h6" color="blue-gray" className="md:-mb-3">
                                Name
                            </Typography>
                            <Input
                                size="lg"
                                name="name"
                                placeholder="Your Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                
                                required />
                            <Typography variant="h6" color="blue-gray" className="md:-mb-3">
                                Email
                            </Typography>
                            <Input
                                size="lg"
                                name="email"
                                type="email"
                                defaultValue={user?.email}
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>
                        <div className="mx-auto md:flex gap-9 items-center">
                            <Typography variant="h6" color="blue-gray" className="md:-mb-3">
                                Title
                            </Typography>
                            <Input
                                size="lg"
                                type="text"
                                name="title"
                                placeholder="Assignment title"
                                className="md:mx-3 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="md:-mb-3">
                                Marks
                            </Typography>
                            <Input
                                size="lg"
                                name="marks"
                                type="number"
                                placeholder="Assignment total marks"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div className="mx-auto md:flex gap-9 items-center">
                            <Typography variant="h6" color="blue-gray" className="md:-mb-3">
                                Image
                            </Typography>
                            <Input
                                size="lg"
                                name="img"
                                placeholder="Photo URL"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="md:-mb-3">
                                Date
                            </Typography>
                            <Input
                                size="lg"
                                name="date"
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

                                <Textarea variant="outlined" name="description" label="Description" />
                            </div>
                            <div className="flex w-72 flex-col gap-6">

                                <Select value={difficultyLvl} onChange={handleSelect} color="teal" name="difficulty" label="Select difficulty">
                                    <Option value="easy">Easy</Option>
                                    <Option value="medium">Medium</Option>
                                    <Option value="hard">Hard</Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" className="mt-6 items-center" fullWidth>
                        submit
                    </Button>

                </form>
            </Card>
        </div>

    );
};

export default CreateAssignment;