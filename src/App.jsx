import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import './css/App.css'
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
    return (
        <div className="container-fluid">
            {/* navBar */}
            <Navbar />
            {/* Banner */}
            <Banner />
            
            <Row
                title="Netflix originals" 
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
        </div>
    )
}

export default App;