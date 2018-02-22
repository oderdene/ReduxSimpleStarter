import React, { Component } from 'react';

class SearchBar extends Component {

  // render () {
  //   return <input onChange={this.onInputChange} />;
  // }
  //
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render () {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value )}
         />
        {/* Value of the input: {this.state.term} */}
      </div>  
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
};

export default SearchBar;
