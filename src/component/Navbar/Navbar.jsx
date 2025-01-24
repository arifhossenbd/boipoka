import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const links = (
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 lg:gap-5 text-base md:font-semibold">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "btn text-green-500 border border-green-500 bg-transparent hover:border-none hover:text-white md:hover:bg-green-500 transition-all ease-linear duration-200"
                        : "hover:text-green-500 transition-all ease-linear duration-200"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/listedBooks"
                className={({ isActive }) =>
                    isActive
                        ? "btn text-green-500 border border-green-500 bg-transparent hover:border-none hover:text-white md:hover:bg-green-500 transition-all ease-linear duration-200"
                        : "hover:text-green-500 transition-all ease-linear duration-200"
                }
            >
                Listed Books
            </NavLink>
            <NavLink
                to="/PagesToRead"
                className={({ isActive }) =>
                    isActive
                        ? "btn text-green-500 border border-green-500 bg-transparent hover:border-none hover:text-white md:hover:bg-green-500 transition-all ease-linear duration-200"
                        : "hover:text-green-500 transition-all ease-linear duration-200"
                }
            >
                Pages to Read
            </NavLink>
        </div>
    );
    return (
        <nav className="navbar p-0 flex justify-between">
            <Link to="/" className="text-xl font-bold">Boi Pokaa</Link>
            <div className="hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="flex gap-2 md:gap-0">
                <div className="flex gap-2">
                    <Link className="btn bg-green-400 hover:bg-green-500 text-white transition-all ease-linear duration-200">Sign In</Link>
                    <Link className="btn bg-sky-400 hover:bg-green-500 text-white transition-all ease-linear duration-200">Sign Up</Link>
                </div>
                <div className="dropdown dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 px-2 w-24 shadow">
                        {links}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
