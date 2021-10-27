import { BrowserRouter, Route } from 'react-router-dom';
import StreamingCreate from './streaming/StreamingCreate';
import StreamingDelete from './streaming/StreamingDelete';
import StreamingEdit from './streaming/StreamingEdit';
import StreamingList from './streaming/StreamingList';
import StreamingShow from './streaming/StreamingShow';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamingList} />
          <Route path="/streaming/new" exact component={StreamingCreate} />
          <Route path="/streaming/edit" exact component={StreamingEdit} />
          <Route path="/streaming/delete" exact component={StreamingDelete} />
          <Route path="/streaming/show" exact component={StreamingShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
