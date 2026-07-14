import clsx from "clsx"

export default function OrderButtons({setOldest, setNewest, setMostPopular, setLeastPopular, currentActive}) {

    
    
    return (
        <div className="w-[80%] mx-auto mt-10 text-secondary text-xl font-bold">
            <div className="flex mb-3 items-center gap-3">
                <h4 className="">Release Date:</h4>
                <button
                
                className={clsx("px-3 rounded-full py-2 text-main2 border hover:bg-secondary transition-colors duration-300 hover:text-primary", currentActive === "newest" && "bg-secondary text-primary")}
                onClick={setNewest}>
                    Newest
                </button>
                <button
                
                className={clsx("px-3 rounded-full py-2 text-main2 border hover:bg-secondary transition-colors duration-300 hover:text-primary", currentActive === "oldest" && "bg-secondary text-primary")}
                onClick={setOldest}>
                    Oldest
                </button>
            </div>
            <div className="flex mb-3 items-center gap-3">
                <h4 className="">Popularity:</h4>
                <button
                
                className={clsx("px-3 rounded-full py-2 text-main2 border hover:bg-secondary transition-colors duration-300 hover:text-primary", currentActive === "newest" && "bg-secondary text-primary")}
                onClick={setMostPopular}>
                    Most
                </button>
                <button
                
                className={clsx("px-3 rounded-full py-2 text-main2 border hover:bg-secondary transition-colors duration-300 hover:text-primary", currentActive === "oldest" && "bg-secondary text-primary")}
                onClick={setLeastPopular}>
                    Least
                </button>
            </div>
        </div>
    )}