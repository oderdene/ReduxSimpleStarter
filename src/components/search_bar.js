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

    this.state = { term: 'asdf' };
  }

  render () {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })}
         />
        Value of the input: {this.state.term}
      </div>  
    );
  }
};

export default SearchBar;
