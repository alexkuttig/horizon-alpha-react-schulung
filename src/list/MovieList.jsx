import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Row, Col, Card } from 'antd';
const { Meta } = Card;

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const mMoviesCall = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d49416cd8a2e65767b5ac717906e3f63');
        const mMovies = await mMoviesCall.json();
        console.log(mMovies);
        setMovies(mMovies.results);
    }

    let renderedMovies = [];
    if (movies.length > 0) {
        movies.forEach((movie) => {
            renderedMovies.push(
                <Col xxl={3} xl={4} lg={6} md={8} sm={12} xs={24} key={'movie' + movie.id}>
                    <Link to={'/details/' + movie.id}>
                        <Card cover={
                            movie.poster_path ?
                                (
                                    <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
                                         />
                                )
                                :
                                (
                                    <img
                                        src={'https://rezerwacja.opera.szczecin.pl/msi/Themes/msidemo2/images/placeholder-kino.png'}
                                        />
                                )
                        }>
                            <Meta
                            title={movie.title}
                            description={movie.release_date} />
                        </Card>
                    </Link>
                </Col>
            )
        })
    }

    return (
        <div style={styles.container}>
            <Row gutter={[16, 16]}>
                {
                    renderedMovies
                }
            </Row>
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
        width: 150
    },
    movieInfo: {
        paddingLeft: 16,
    }
}

export default MovieList;
