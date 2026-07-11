export default function MovieImages({images}) {
    console.log(images)

    const arr = images.filter(img => img.aspect_ratio === 1.778)
    const imgEl = arr.map((img, index) => <img 
            key={index}
            className="snap-end w-[calc(33%-2px)] sm:w-[calc(20%-4px)]  lg:w-[calc(12.5%-4px)]"
            src={`https://image.tmdb.org/t/p/original/${img.file_path}`} 
            alt="img"
            tabindex="0" />)
    return (
        <div className="snap-x overflow-x-scroll scroll-smooth custom-scrollbar">
            <div className="flex gap-2 p-2">
                {imgEl}
            </div>
        </div>
    )
}