import { Outlet, NavLink } from "react-router";
import clsx from 'clsx';
import { useState } from "react";

export default function Nav() {
    const[ buttonUsed, setButtonUsed] =useState(false)
    function buttonState(){
        setButtonUsed(prev => !prev)
    }

return (
    <>
        <nav className="flex border-b border-gray-500 shadow shadow-white/45 py-2.5 px-2 justify-evenly gap-2.5 font-semibold items-center">
            <form className="md:flex-1 min-w-0 flex md:max-w-1/2 drop-shadow-secondary drop-shadow-sm  rounded-full " 

            action="">

                <input 
                className="md:flex-1 min-w-0 pl-5 pr-1 py-1 rounded-l-full outline-0 text-primary bg-secondary placeholder:text-primary/50 md:text-base text-sm font-bold" 
                placeholder="Search" 
                type="text" 
                name="search"/>

                <button
                className="peer text-secondary bg-primary pl-7 pr-5 py-2 rounded-r-full transition-colors hover:bg-hover hover:text-primary hover:drop-shadow-amber-950 hover:drop-shadow-sm"
                >
                    <svg className="size-6"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    className="bi bi-search" 
                    viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
            </form> 
        
            <button onClick={buttonState} className="xs:hidden mx-2">here</button>
            

            <div className="xs:flex hidden gap-x-4 sm:text-2xl  font-black tracking-wider italic text-shadow-md/20 text-shadow-secondary">
                <NavLink
                className={({isActive}) => clsx("px-2.5 py-2 transition-all hover:scale-110 " , isActive && "text-hover")} 
                to="/">Home</NavLink>
                <NavLink 
                className={({isActive}) => clsx("px-2.5 py-2 transition-all hover:scale-110 " , isActive && "text-hover")} 
                to="/favorites"> Favorites</NavLink>
            </div>
        </nav>
        {buttonUsed && <div
            className="xs:hidden fixed w-screen  z-50 h-screen bg-primary transition-opacity duration-500 opacity-100">
            <div className="flex gap-x-4 flex-col sm:text-2xl  font-black tracking-wider italic text-shadow-md/20 text-shadow-secondary">
                <NavLink
                className={({isActive}) => clsx("px-2.5 py-1 transition-all border-b border-gray-500 animate-fadeTop  hover:scale-110 " , isActive && "text-hover")} 
                to="/">Home</NavLink>
                <NavLink 
                className={({isActive}) => clsx("px-2.5 py-1 transition-all  border-b border-gray-500 animate-fadeTop hover:scale-110 " , isActive && "text-hover")} z
                to="/favorites"> Favorites</NavLink>
            </div>
        </div>}
        <Outlet />
    </>
)
}