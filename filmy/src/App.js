import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <form>
          <div class="mb-3">
            <div for="film" class="form-label">Tytuł filmu:</div>
            <input type="text" class="form-control" id="film" />
          </div>
          <div id="film" class="form-label">Wybierz rodzaj filmu</div>
        <select id="select" class="form-control">
          <option></option>
          <option value="1">Komedia</option>
          <option value="2">Obyczajowy</option>
          <option value="3">Sensacyjny</option>
          <option value="4">Horror</option>
        </select>
        <div><button type="submit" class="btn btn-primary">Dodaj</button></div>.
      </form>
    </div>
  );
}

export default App;
