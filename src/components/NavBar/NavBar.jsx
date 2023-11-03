import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/service', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/*', name: 'NotFound' },
    ];


    return (
        <nav className="bg-yellow-200  p-6">
            <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                {
                    open === true ? <GrClose className="text-xl font-extrabold"></GrClose> : <AiOutlineMenu className="text-xl font-extrabold"></AiOutlineMenu>
                }
            </div>
            <ul className={`${open ? 'top-[68px]' : '-top-60'} justify-center font-sans font-bold md:flex duration-1000 rounded-xl absolute md:static  bg-yellow-200 px-6 shadow-2xl `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;