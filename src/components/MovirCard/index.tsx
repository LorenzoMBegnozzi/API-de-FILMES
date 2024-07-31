import { Movie } from "@/Types"

export interface Props{
    movie: Movie
}

export default function MovieCard(props: Props) {

    //variavel:
        const movie = props.movie;

    return (
        <li className='movie-card'>
            <p>
                {movie.title}
            </p>
            <p className='description'>
                {movie.overview}
            </p>
            <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
            />
            <p>
                {movie.vote_average}
            </p>
        </li>
    )
}