import './App.css';
import SearchBar from './components/SeachBar';
import UserGallery from './components/UserGallery';

function App() {

  const textStyle= {
    fontSize: '17px'
  }

  return (
    <div className="App">
      <h1>PRACTICING CSS</h1>
      <br></br>
      <h3>Import one style sheet.</h3>
      <h4>Create three different micro stylesheets.</h4>
      <h6>Pass one microstyle sheet as a prop.</h6>
      <br></br>

      <div>
        <SearchBar />
        <UserGallery textStyle= {textStyle} />
      </div>
    </div>
  );
}

export default App;
