import React from 'react';
import Searchbar from './Searchbar';
import youtube, { baseParams } from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.handleSearch('learn react');
  }

  handleSearch = async term => {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term,
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  }

  render() {
    return (
      <div className="ui container" >
        <Searchbar onFormSubmit={this.handleSearch} />
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
