import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <div class="mb-3">
            <label for="film" class="form-label">Tytuł filmu: </label>
            <input type="text" class="form-control" id="film" />
          </div>
          
        </div>
        
        <select class="form-select" aria-label="Default select example">
          <option selected>Wybierz rodzaj</option>
          <option></option>
          <option value="1">Komedia</option>
          <option value="2">Obyczajowy</option>
          <option value="3">Sensacyjny</option>
          <option value="4">Horror</option>
        </select>
        <div>
        <button type="submit" class="btn btn-primary">Dodaj</button></div>.
      </form>
    </div>
  );
}

export default App;
