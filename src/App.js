import './App.css';
import RepositoriesList from './components/repositories/RepositoriesList';
import authInterceptor from './interceptors';

function App() {
  return (
    <div className="App">
      <RepositoriesList />
    </div>
  );
}

export default App;