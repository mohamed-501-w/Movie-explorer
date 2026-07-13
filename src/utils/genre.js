import { genres } from "../data/genres";

export default function genreList(movie) {
    return genres.filter(genre => {
        return movie.genre_ids.includes(genre.id)
    }).map(el => `${el.name}`).join(', ')
}