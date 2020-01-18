import React from 'react';
import Searchbar from './Searchbar';
import youtube, {baseParams} from '../apis/youtube';

class App extends React.Component {

  handleSearch(term) {
    youtube.get('/search', {
      params: {
        ...baseParams,
        q: term,
      }
    });
  }

  render() {
    return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.handleSearch} />
      </div>
    );
  }
}

export default App;
