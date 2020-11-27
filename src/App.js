import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import { PageHeader } from "antd";
import { BackTop } from 'antd';
import MovieList from './list/MovieList';
import MovieDetails from './details/MovieDetails';
import Search from './search/Search';

export default function App() {
    return (
        <Router>
            <div style={styles.outerContainer}>
                <PageHeader
                    backIcon={false}
                    title="MyMovieDB"
                    subTitle="Made with ant.design"
                    extra={<Search />}
                />
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
                <BackTop />
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
