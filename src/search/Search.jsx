import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const OuterContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px
`

const StyledLink = styled(Link)`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
    padding: 16px;
    border-bottom: 1px solid #eeeeee;
`

const MoviePoster = styled.img`
    width: 50px;
`

const MovieInfoContainer = styled.div`
    padding-left: 16px;
`

const MovieTitle = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
`

const MovieListContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 59px;
    right: 32px;
    width: 212px;
    z-index: 10;
    background-color: #cccccc
`

function Search() {
    const [movies, setMovies] = useState([]);

    const search = async (event) => {
        const searchString = event.target.value;
        if(searchString.length >= 2) {
            const mMoviesCall = await fetch('https://api.themoviedb.org/3/search/movie?api_key=d49416cd8a2e65767b5ac717906e3f63&query=' + searchString);
            const mMovies = await mMoviesCall.json();
            setMovies(mMovies.results.slice(0, 5));
        } else {
            setMovies([]);
        }
    }

    let renderedMovies = [];
    if(movies.length > 0){
        movies.forEach((movie) => {
            renderedMovies.push(
                <StyledLink to={'/details/' + movie.id} style={styles.movieContainer} key={'movie' + movie.id}>
                    {
                        movie.poster_path ?
                            (
                                <MoviePoster src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} style={styles.moviePoster} />
                            )
                            :
                            (
                                <MoviePoster src={'https://rezerwacja.opera.szczecin.pl/msi/Themes/msidemo2/images/placeholder-kino.png'} style={styles.moviePoster} />
                            )
                    }
                    <MovieInfoContainer>
                        <MovieTitle>{movie.title}</MovieTitle>
                    </MovieInfoContainer>
                </StyledLink>
            )
        })
    }

    return (
        <OuterContainer style={styles.container}>
            <input onChange={search} style={styles.searchInput}/>
            <MovieListContainer>
                {
                    renderedMovies
                }
            </MovieListContainer>
        </OuterContainer>
    );
}

const styles = {
    container: {
    },
    searchInput: {
        width: 200,
        border: '1px solid #cccccc',
        padding: 5
    },
    movieListContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 59,
        right: 32,
        width: 212,
        zIndex: 10,
        backgroundColor: '#cccccc'
    },
    moviePoster: {
        width: 50
    },
    movieInfo: {
        paddingLeft: 16,
    }
}

export default Search;
