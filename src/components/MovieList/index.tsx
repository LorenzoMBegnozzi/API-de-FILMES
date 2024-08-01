'use client'

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { Movie } from '@/Types/movie';
import MovieCard from '../MovirCard';


export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]); // Corrigi o typo aqui também

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: "get",
            url: "https://api.themoviedb.org/3/discover/movie",
            params: {
                api_key: '63d2e40f5c5f7fdee70adbf3f5bca08d',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results); // Corrigi o typo aqui também
        })
    }

    return (
        <ul className="movie-list">
            {movies.map((movie) =>
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            )}
        </ul>
    );
}
