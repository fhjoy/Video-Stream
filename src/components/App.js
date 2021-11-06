import { Router, Route } from 'react-router-dom';
import StreamingCreate from './streaming/StreamingCreate';
import StreamingDelete from './streaming/StreamingDelete';
import StreamingEdit from './streaming/StreamingEdit';
import StreamingList from './streaming/StreamingList';
import StreamingShow from './streaming/StreamingShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamingList} />
          <Route path="/streaming/new" exact component={StreamingCreate} />
          <Route path="/streaming/edit/:id" exact component={StreamingEdit} />
          <Route
            path="/streaming/delete/:id"
            exact
            component={StreamingDelete}
          />
          <Route path="/streaming/show/:id" exact component={StreamingShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
