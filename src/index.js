import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCBtCMKpgCA5_OJQT9qQouPw4iXJwH78b0';

// Create a new component. This component should produce
// some HTML
const App = function() { // const App = () => { this
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
