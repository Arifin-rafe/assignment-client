import React, { useContext } from "react";
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
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const TakeTest = ({email,title,name}) => {
  const [open, setOpen] = React.useState(false);
  const {user} = useContext(AuthContext)

  const handleOpen = () => setOpen(!open);
  const handleAssignmentSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const link = form.link.value
    const notes = form.notes.value
    const submitInfo = { link, notes,title,participantEmail:user?.email, authorEmail:email,name }
    console.log(submitInfo);

    
    fetch('http://localhost:5000/submitted', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(submitInfo)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Assignment Submitted',
                    text: 'Successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })

  }

  return (
    <>
    <Button onClick={handleOpen}>Take Test</Button> 
        <Dialog open={open} size="xs" handler={handleOpen}>
          <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start">
              {" "}
              <Typography className="mb-1" variant="h4">
                Assignment Submission
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
          <form onSubmit={handleAssignmentSubmit} action="">
          <DialogBody>
            <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
              Put link and note then click button.
            </Typography>
            
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Link
              </Typography>
              <Input label="Link" type="text" name="link"  />
              <Textarea label="Notes" type="text" name="notes"  />
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
}
export default TakeTest