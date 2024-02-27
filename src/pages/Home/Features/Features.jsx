import {
    Card,
    CardBody,
    Typography,
    
} from "@material-tailwind/react";

const Features = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-5'>
            <Card className="mt-6 w-auto">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        User Authentication and Role-Based Access
                    </Typography>
                    <Typography>
                        User Accounts: The website should allow users, such as students and instructors, to create accounts with unique credentials.
                        Role-Based Access Control (RBAC): Different user roles, such as students, teachers, and administrators, should have specific permissions. For example, students may only submit assignments, while teachers can review and grade them.
                    </Typography>
                </CardBody>
                
            </Card>
            <Card className="mt-6 w-auto">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        File Upload and Submission System
                    </Typography>
                    <Typography>
                        File Upload: Students should be able to upload their assignment files in various formats (e.g., Word documents, PDFs, or multimedia files).
                        Submission Confirmation: Users should receive confirmation of successful submission, along with a timestamp for record-keeping.
                        Version Control: The system may support versioning to allow students to make updates before the submission deadline.
                    </Typography>
                </CardBody>
                
            </Card>
            <Card className="mt-6 w-auto">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Grading and Feedback Mechanism
                    </Typography>
                    <Typography>
                        Grading Interface: Instructors should have a user-friendly interface to review and grade assignments. This might include features like inline commenting and highlighting within documents.
                        
                        Gradebook Integration: The website may integrate with a gradebook, allowing seamless transfer of grades and feedback to the overall course assessment.
                    </Typography>
                </CardBody>
               
            </Card>
        </div>
    );
}

export default Features;