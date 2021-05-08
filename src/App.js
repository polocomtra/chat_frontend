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

import {library} from '@fortawesome/fontawesome-svg-core'
import {faSpinner,faEllipsisV,faUserPlus,faSignOutAlt,faTrash,faCaretDown,faUpload,faTimes,faBell} from '@fortawesome/free-solid-svg-icons'
import {faSmile,faImage} from '@fortawesome/free-regular-svg-icons'
library.add(faSpinner,faEllipsisV,faUserPlus,faSignOutAlt,faTrash,faCaretDown,faUpload,faTimes,faBell,faSmile,faImage)

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
