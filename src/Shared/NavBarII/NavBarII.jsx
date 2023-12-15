import React, { useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { CircleStackIcon, HomeIcon, PlusIcon, Square3Stack3DIcon, SquaresPlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

export const NavBarII=()=> {

    const {user,logOut}= useContext(AuthContext)
    const handleLogout=()=>{
        logOut()
        .then(result => { })
        .catch(error => console.error(error.message))

    }
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                
                <HomeIcon className="h-5 w-5"/>
                <Link className="hover:text-gray-500" to='/'>Home</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                
                <Square3Stack3DIcon className="h-5 w-5"/>
                <Link className="hover:text-gray-500" to='/assignments'>Assignments</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                
                <SquaresPlusIcon className="h-5 w-5"></SquaresPlusIcon>
                <Link className="hover:text-gray-500" to='/createAssignment'>Create Assignment</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                
                <Square3Stack3DIcon className="h-5 w-5"></Square3Stack3DIcon>
                <Link className="hover:text-gray-500" to='/myAssignments'>My Assignments</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <CircleStackIcon className="h-5 w-5"></CircleStackIcon>
                <Link className="hover:text-gray-500" to='/submitted'>Submitted</Link>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    <p><span className="text-2xl font-serif">1st</span> - Assignments</p>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                
                <div className="flex items-center gap-x-1 ">
                        <p className="text-sm ml-6">{user&& user.email}</p>
                        {user?<Button onClick={handleLogout} fullWidth variant="gradient" size="sm" className="">
                            <span>Log Out</span>
                        </Button>:
                        <Link to='/login'><Button fullWidth variant="text" size="sm" className="">
                        <span>Sign in</span>
                    </Button></Link>}
                                               
                    </div>
                
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        {user&& user.email}
                        {user?<Button onClick={handleLogout} fullWidth variant="gradient" size="sm" className="">
                            <span>Log Out</span>
                        </Button>:
                        <Link to='/login'><Button fullWidth variant="text" size="sm" className="">
                        <span>Sign in</span>
                    </Button></Link>}
                        
                        
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}