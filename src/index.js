import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyD-qbnaMIYPSnHm7G8DMZATdy1fuSr8l5g';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch({term: 'life is beautiful', setSelected: true})

    }

    videoSearch({term, setSelected}) {

        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: setSelected === true ? videos[0] : this.state.selectedVideo
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {
            this.videoSearch({term, setSelected: false})
        }, 300);

        return <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

//TODO: Downwards data flow: This is a react term that means that only the most parent component should be responsible for fetching data
