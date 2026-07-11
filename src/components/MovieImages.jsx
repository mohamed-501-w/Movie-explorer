export default function MovieImages({ images }) {
    const arr = images.filter(img => img.aspect_ratio === 1.778)
    
    const imgEl = arr.map((img, index) => (
        <button 
            key={index}
            className="
                snap-end shrink-0 outline-none
                w-[calc(33.33%-8px)] sm:w-[calc(20%-8px)] lg:w-[calc(12.5%-8px)]
                
                focus:fixed focus:inset-0 focus:w-screen focus:h-screen focus:z-50 focus:bg-black/80
                focus:flex focus:items-center focus:justify-center
                focus:pointer-events-none
                
                group
            "
        >
            <img 
                className="
                    w-full h-auto object-cover rounded transition-transform duration-200
                    group-focus:w-auto group-focus:max-w-[90vw] group-focus:max-h-[80vh] group-focus:shadow-2xl
                    pointer-events-auto
                "
                src={`https://image.tmdb.org/t/p/w500/${img.file_path}`} 
                srcSet={`https://image.tmdb.org/t/p/original/${img.file_path} 2x`}
                loading="lazy" 
                alt="movie snapshot" 
            />
        </button>
    ))

    return (
        <div className="snap-x overflow-x-scroll scroll-smooth custom-scrollbar w-full">
            <div className="flex gap-2 p-2">
                {imgEl}
            </div>
        </div>
    )
}