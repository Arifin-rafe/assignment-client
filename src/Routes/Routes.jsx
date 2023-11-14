import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Assignments from "../pages/Assignments/Assignments";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import MyAssignments from "../pages/MyAssignments/MyAssignments";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Submitted from "../pages/Submitted/Submitted";
import Error from "../pages/Error/Error";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'assignments',
                element:<Assignments></Assignments>,
            },
            {
                path:'createAssignment',
                element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>,
            },
            {
                path:'update/:id',
                element:<PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
            },
            {
                path:'myAssignments',
                element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
            },
            {
                path:'assignmentDetails/:id',
                element:<PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/assignmentDetails/${params.id}`)
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'submitted',
                element:<PrivateRoute><Submitted></Submitted></PrivateRoute>
            }
        ]
    },
]);

export default router