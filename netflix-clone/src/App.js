import './App.css';
import Row from './Row' ;
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h2>Hello my name is shourya</h2>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} ></Row>
    </div>
  );
}

export default App;
