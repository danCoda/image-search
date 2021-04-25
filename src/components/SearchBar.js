import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit(event) {
        event.preventDefault(); // or else it will refresh the page.
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            onChange={e => this.setState({ term: e.target.value.toLocaleUpperCase() })}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;