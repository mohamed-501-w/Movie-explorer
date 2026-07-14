export function newestOrder(arr){
    return arr.toSorted((a, b) => (
    new Date(b.release_date).getTime() - new Date(a.release_date).getTime())
    )
    
}

export function oldestOrder(arr) {
    return arr.toSorted((a, b) => (
        new Date(a.release_date).getTime() - new Date(b.release_date).getTime())
    )

}
export function mostPopularOrder(arr) {
    return arr.toSorted((a, b) => ( b.popularity - a.popularity));
r
}
export function leastPopularOrder(arr) {
    return arr.toSorted((a, b) => ( a.popularity - b.popularity));
}