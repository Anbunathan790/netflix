import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './components/requests';


function App() {
  return (
    <div>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <h1 style={{color:'red'}}>Netflix</h1>
      <Row isposter={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Trending Movie" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Comedey Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />      

      
      
    </div>
  );
}

export default App;
