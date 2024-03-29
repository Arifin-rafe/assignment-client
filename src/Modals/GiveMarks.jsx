
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import React from "react";

const GiveMarks = ({title,link,notes}) => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
    return (
        <>
            <Button onClick={handleOpen}>Give Marks</Button>
            <Dialog open={open} size="xs" handler={handleOpen}>
                <div className="flex items-center justify-between">
                    <DialogHeader className="flex flex-col items-start">
                        {" "}
                        <Typography className="mb-1" variant="h4">
                            Marking section
                        </Typography>
                    </DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <form action="">
                    <DialogBody>
                        <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                            Put marks and feedback then click submit button.
                        </Typography>

                        <div className="grid gap-6">
                            <Typography className="-mb-1" color="blue-gray" variant="h6">
                                Title: {title}
                            </Typography>
                            <Typography className="-mb-1" color="blue-gray" variant="h6">
                                Link: {link}
                            </Typography>
                            <Typography className="-mb-1" color="blue-gray" variant="h6">
                                Notes: {notes}
                            </Typography>
                            <Input label="Marks" type="text" name="marks" required/>
                            <Textarea label="FeedBack" type="text" name="feedback" />
                        </div>
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button variant="text" color="gray" onClick={handleOpen}>
                            cancel
                        </Button>
                        <Button type="submit" variant="gradient" color="gray" onClick={handleOpen}>
                            Submit
                        </Button>
                    </DialogFooter>
                </form>

            </Dialog>

        </>
    );
};

export default GiveMarks;