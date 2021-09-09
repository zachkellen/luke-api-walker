import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import DropDown from './Components/DropDown';
import Films from './Views/Films';
import People from './Views/People';
import Planets from './Views/Planet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Star Wars API</h1>
      <DropDown />
        <Switch>
          <Route exact path='/planets/:id'>
            <Planets />
          </Route>
          <Route exact path='/people/:id'>
            <People />
          </Route>
          <Route exact path='/films/:id'>
            <Films />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
