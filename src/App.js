import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" />
        </div>
      </form>
    </div>
  );
}

export default App;
