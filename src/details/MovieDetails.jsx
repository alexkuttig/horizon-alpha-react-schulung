import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

function MovieDetails() {
    const [movie, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetchMovie();
    }, []);

    const fetchMovie = async () => {
        const mMovieCall = await fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=d49416cd8a2e65767b5ac717906e3f63');
        const mMovie = await mMovieCall.json();
        console.log(mMovie);
        setMovie(mMovie);
    }


    return (
        <div style={styles.container}>
            <div style={styles.navContainer}>
                <Link to={'/'}>
                    back
                </Link>
            </div>
            {
                movie ?
                        (

                            <div style={styles.movieContainer} key={'movie' + movie.id}>
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
                                    <h2>{movie.title}</h2>
                                    <p>{movie.release_date}</p>
                                </div>
                            </div>
                        )
                    :
                        (
                            <p>Loading...</p>
                        )
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
    navContainer: {
        display: 'flex',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        marginBottom: 16
    },
    movieContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 16,
        border: '1px solid #eeeeee',
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        marginBottom: 16
    },
    moviePoster: {
        width: 300
    },
    movieInfo: {
        paddingLeft: 16,
    }
}

export default MovieDetails;
