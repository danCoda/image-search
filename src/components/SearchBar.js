import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault(); // or else it will refresh the page.

        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            onChange={e => this.setState({ term: e.target.value.toLocaleUpperCase() })}
                            value={this.state.term}
                            placeholder="Type keyword here..."
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;