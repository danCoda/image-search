import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{

    async onSearchSubmit(term) {
        console.log(term);
        const response = await axios.get('https://api.unsplash.com/search/photos', {
                headers: {
                    Authorization: 'Client-ID AGN8OW5A2DnoZBtOYUWPKeYTG7KmCw1dIr-b4f4iv14'
                },
                params: { query: term }
            });
        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default App;