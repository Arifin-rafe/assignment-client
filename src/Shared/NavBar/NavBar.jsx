import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const NavBar = () => {
const {user,logOut}= useContext(AuthContext)
    const handleLogout=()=>{
        logOut()
        .then(result => { })
        .catch(error => console.error(error.message))

    }
     const navLinks = document.querySelector('.nav-links')
                function onToggleMenu(e){
                    e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }
            
    return (
        <div className="font-[Poppins] ">
            <header className="bg-gradient-to-r from-green-500 rounded-lg shadow-md">
                <nav className="flex justify-between items-center w-[92%]  mx-auto">
                    <div>
                        <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..."/>
                    </div>
                    <div
                        className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                            <li>
                                {/* <a className="hover:text-gray-500" href="#">Products</a> */}
                                <Link className="hover:text-gray-500" to='/'>Home</Link>
                                
                            </li>
                            <li>
                                {/* <a className="hover:text-gray-500" href="#">Solution</a> */}
                                <Link className="hover:text-gray-500" to='/assignments'>Assignments</Link>
                            </li>
                            <li>
                                {/* <a className="hover:text-gray-500" href="#">Resource</a> */}
                                <Link className="hover:text-gray-500" to='/createAssignment'>Create Assignment</Link>
                            </li>
                            <li>
                                {/* <a className="hover:text-gray-500" href="#">Developers</a> */}
                                <Link className="hover:text-gray-500" to='/myAssignments'>My Assignments</Link>
                            </li>
                            <li>
                                {/* <a className="hover:text-gray-500" href="#">Submitted</a> */}
                                <Link className="hover:text-gray-500" to='/submitted'>Submitted</Link>
                            </li>
                        </ul>
                    </div>
                    <div className
                    ="flex items-center gap-6">
                        {user&&
                        user.email}
                        {user?
                        <button onClick={handleLogout} className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-[#87acec] text-bold">LogOut</button>:
                        <Link to='/login'><button className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-[#87acec] text-bold">Login</button></Link>
                        }
                                           
                    </div>
                    </nav>
            </header>
            
        </div>
    );
};

export default NavBar;