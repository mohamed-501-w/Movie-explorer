import { Outlet, NavLink } from "react-router";

export default function Nav() {

return (
    <>
        <nav className="flex border-b border-gray-500 shadow shadow-white/45 py-5 px-8 justify-evenly gap-x-2.5 font-semibold">
            <form className="flex-1 flex max-w-1/2 drop-shadow-secondary drop-shadow-sm  rounded-full" 

            action="">

                <input 
                className="flex-1 px-5 py-1 rounded-l-full outline-0 text-primary bg-secondary placeholder:text-primary/50 text-lg font-bold" 
                placeholder="Search" 
                type="text" 
                name="search"/>

                <button
                className="peer text-secondary bg-primary pl-7 pr-5 py-2 rounded-r-full transition-colors hover:bg-hover hover:text-primary hover:drop-shadow-amber-950 hover:drop-shadow-sm"
                >
                    <svg className="size-6"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    class="bi bi-search" 
                    viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
            </form>
                <div className="flex gap-4 text-2xl  font-black tracking-wider italic text-shadow-md/20 text-shadow-secondary">
                    <NavLink
                    className="px-2.5 py-2 transition-all hover:scale-110 hover:text-hover" 
                    to="/">Home</NavLink>
                    <NavLink 
                    className="px-2.5 py-2 transition-all hover:scale-110 hover:text-hover"
                    to="/favorites"> Favorites</NavLink>
                </div>
        </nav>
        <Outlet />
    </>
)
}