import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
      <div>
        <div class="mb-3">
          <label for="film" class="form-label">Tytuł filmu: </label>
          <input type="text" class="form-control" id="film"/>
        </div>
        <div id="rodzajfilmu" class="form-text">Wybierz rodzaj filmu</div>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Sprawdź!</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
