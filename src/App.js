import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MovieList from './list/MovieList';
import MovieDetails from './details/MovieDetails';
import Search from './search/Search';

export default function App() {
    return (
        <Router>
            <div style={styles.outerContainer}>
                <div style={styles.header}>
                    <h1 style={styles.headerText}>
                        MyMovieDB
                    </h1>
                    <Link to={'/'} style={styles.link}>Home</Link>
                    <Search />
                </div>
                <Switch>
                    <Route path="/details/:id">
                        <MovieDetails/>
                    </Route>
                    <Route path="/">
                        <MovieList/>
                    </Route>
                </Switch>
                <div style={styles.footer}>
                    <p>Made with ❤️ by Alexander Kuttig</p>
                </div>
            </div>
        </Router>
    );
}

const styles = {
    outerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 16,
        backgroundColor: '#f8f8f8',
        borderBottom: '1px solid #dddddd'
    },
    headerText: {
        margin: 0,
        fontSize: 30
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 16,
        backgroundColor: '#f8f8f8'
    },
}
