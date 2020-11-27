import {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import { Input, List, Typography } from 'antd';

const { Paragraph } = Typography;

function Search() {
    const [searchText, setSearchText] = useState("");
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setSearchText("");
        setMovies([]);
    }, [location]);

    const search = async (event) => {
        const searchString = event.target.value;
        setSearchText(searchString);
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
            )
        })
    }

    return (
        <div style={styles.container}>
            <Input onChange={search} value={searchText} style={styles.searchInput} placeholder="Suche Filme..."/>
            {
                movies.length > 0 ?
                    (
                        <div style={styles.movieListContainer}>
                            <List
                                bordered
                                dataSource={movies}
                                renderItem={movie => (
                                    <Link to={'/details/' + movie.id} style={styles.movieContainer} key={'movie' + movie.id}>
                                        {
                                            movie.poster_path ?
                                                (
                                                    <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} style={styles.moviePoster} />
                                                )
                                                :
                                                (
                                                    <img src={'https://rezerwacja.opera.szczecin.pl/msi/Themes/msidemo2/images/placeholder-kino.png'} style={styles.moviePoster} />
                                                )
                                        }
                                        <div style={styles.movieInfo}>
                                            <Paragraph ellipsis><b>{movie.title}</b></Paragraph>
                                            <p>{movie.release_date}</p>
                                        </div>
                                    </Link>
                                )}
                            />
                        </div>
                    ) :
                    (<div></div>)
            }
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 16
    },
    searchInput: {
        width: 250,
    },
    movieListContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 68,
        right: 40,
        width: 250,
        zIndex: 10,
        backgroundColor: '#f8f8f8'
    },
    movieContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 16,
        borderBottom: '1px solid #eeeeee',
    },
    moviePoster: {
        width: 50
    },
    movieInfo: {
        paddingLeft: 16,
    }
}

export default Search;
