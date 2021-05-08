import './App.scss';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Chat from './components/chat/Chat';
import ProtectedRoute from './components/Router/ProtectedRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path='/' component={Chat} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route render={()=>(<h1>404 page not found</h1>)} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
