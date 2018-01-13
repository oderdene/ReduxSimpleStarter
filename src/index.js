import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCBtCMKpgCA5_OJQT9qQouPw4iXJwH78b0';

const App = function() {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
