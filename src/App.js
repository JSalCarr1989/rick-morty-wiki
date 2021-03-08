import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home/home.component'
import CharactersPage from './pages/Characters/characters.component'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/wiki/characters" component={CharactersPage} />
      </Switch>
    </div>
  );
}

export default App;
